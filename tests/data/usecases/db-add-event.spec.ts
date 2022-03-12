import { DbAddEvent } from '@/data/usecases'
import { mockAddEventParams, throwError } from '@/tests/domain/mocks'
import { AddEventRepositorySpy, CheckByIssueIdAndIssueUpdatedAtRepositorySpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: DbAddEvent
  addEventRepositorySpy: AddEventRepositorySpy
  checkByIssueIdAndIssueUpdatedAtRepositorySpy: CheckByIssueIdAndIssueUpdatedAtRepositorySpy
}

const makeSut = (): SutTypes => {
  const checkByIssueIdAndIssueUpdatedAtRepositorySpy = new CheckByIssueIdAndIssueUpdatedAtRepositorySpy()
  const addEventRepositorySpy = new AddEventRepositorySpy()
  const sut = new DbAddEvent(addEventRepositorySpy, checkByIssueIdAndIssueUpdatedAtRepositorySpy)
  return {
    sut,
    addEventRepositorySpy,
    checkByIssueIdAndIssueUpdatedAtRepositorySpy
  }
}

describe('DbAddEvent Usecase', () => {
  test('Should call AddEventRepository with correct values', async () => {
    const { sut, addEventRepositorySpy } = makeSut()
    const addEventtParams = mockAddEventParams()
    await sut.add(addEventtParams)
    expect(addEventRepositorySpy.params).toEqual({
      action: addEventtParams.action,
      issue: addEventtParams.issue,
      repository: addEventtParams.repository,
      sender: addEventtParams.sender
    })
  })

  test('Should throw if AddEventRepository throws', async () => {
    const { sut, addEventRepositorySpy } = makeSut()
    jest.spyOn(addEventRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddEventParams())
    await expect(promise).rejects.toThrow()
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddEventParams())
    expect(isValid).toBe(true)
  })

  test('Should return false if AddEventRepository returns false', async () => {
    const { sut, addEventRepositorySpy } = makeSut()
    addEventRepositorySpy.result = false
    const isValid = await sut.add(mockAddEventParams())
    expect(isValid).toBe(false)
  })

  test('Should return false if CheckByIssueIdAndIssueUpdatedAtRepository returns true', async () => {
    const { sut, checkByIssueIdAndIssueUpdatedAtRepositorySpy } = makeSut()
    checkByIssueIdAndIssueUpdatedAtRepositorySpy.result = true
    const isValid = await sut.add(mockAddEventParams())
    expect(isValid).toBe(false)
  })

  test('Should call CheckByIssueIdAndIssueUpdatedAtRepository with correct email', async () => {
    const { sut, checkByIssueIdAndIssueUpdatedAtRepositorySpy } = makeSut()
    const addEventParams = mockAddEventParams()
    await sut.add(addEventParams)
    expect(checkByIssueIdAndIssueUpdatedAtRepositorySpy.params).toEqual({
      issueId: addEventParams.issue.id,
      updatedAt: addEventParams.issue.updated_at
    })
  })
})
