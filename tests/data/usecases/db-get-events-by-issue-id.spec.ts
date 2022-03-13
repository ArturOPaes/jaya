import { DbGetEventsByIssueNumber } from '@/data/usecases'
import { throwError } from '@/tests/domain/mocks'
import { GetEventsByIssueNumberRepositorySpy } from '@/tests/data/mocks'
import faker from 'faker'

type SutTypes = {
  sut: DbGetEventsByIssueNumber
  getEventsByIssueNumberRepositorySpy: GetEventsByIssueNumberRepositorySpy
}

const makeSut = (): SutTypes => {
  const getEventsByIssueNumberRepositorySpy = new GetEventsByIssueNumberRepositorySpy()
  const sut = new DbGetEventsByIssueNumber(getEventsByIssueNumberRepositorySpy)
  return {
    sut,
    getEventsByIssueNumberRepositorySpy
  }
}

describe('DbGetEventsByIssueNumber Usecase', () => {
  test('Should call GetEventsByIssueNumberRepository with correct values', async () => {
    const { sut, getEventsByIssueNumberRepositorySpy } = makeSut()
    const issueNumber = faker.datatype.number()
    await sut.get(issueNumber)
    expect(getEventsByIssueNumberRepositorySpy.params).toBe(issueNumber)
  })

  test('Should throw if GetEventsByIssueNumberRepository throws', async () => {
    const { sut, getEventsByIssueNumberRepositorySpy } = makeSut()
    jest.spyOn(getEventsByIssueNumberRepositorySpy, 'get').mockImplementationOnce(throwError)
    const promise = sut.get(faker.datatype.number())
    await expect(promise).rejects.toThrow()
  })

  test('Should return Array of Events on success', async () => {
    const { sut, getEventsByIssueNumberRepositorySpy } = makeSut()
    const result = await sut.get(faker.datatype.number())
    expect(result).toEqual(getEventsByIssueNumberRepositorySpy.result)
  })
})
