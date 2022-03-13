import { DbGetEventsByIssueId } from '@/data/usecases'
import { throwError } from '@/tests/domain/mocks'
import { GetEventsByIssueIdRepositorySpy } from '@/tests/data/mocks'
import faker from 'faker'

type SutTypes = {
  sut: DbGetEventsByIssueId
  getEventsByIssueIdRepositorySpy: GetEventsByIssueIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const getEventsByIssueIdRepositorySpy = new GetEventsByIssueIdRepositorySpy()
  const sut = new DbGetEventsByIssueId(getEventsByIssueIdRepositorySpy)
  return {
    sut,
    getEventsByIssueIdRepositorySpy
  }
}

describe('DbAddEvent Usecase', () => {
  test('Should call GetEventsByIssueIdRepository with correct values', async () => {
    const { sut, getEventsByIssueIdRepositorySpy } = makeSut()
    const issueId = faker.datatype.number()
    await sut.get(issueId)
    expect(getEventsByIssueIdRepositorySpy.params).toBe(issueId)
  })

  test('Should throw if GetEventsByIssueIdRepository throws', async () => {
    const { sut, getEventsByIssueIdRepositorySpy } = makeSut()
    jest.spyOn(getEventsByIssueIdRepositorySpy, 'get').mockImplementationOnce(throwError)
    const promise = sut.get(faker.datatype.number())
    await expect(promise).rejects.toThrow()
  })

  test('Should return Array of Events on success', async () => {
    const { sut, getEventsByIssueIdRepositorySpy } = makeSut()
    const result = await sut.get(faker.datatype.number())
    expect(result).toEqual(getEventsByIssueIdRepositorySpy.result)
  })
})
