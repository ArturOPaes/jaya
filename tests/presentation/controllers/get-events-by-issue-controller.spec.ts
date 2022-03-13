import { GetEventsByIssueController } from '@/presentation/controllers'
import { badRequest, serverError, ok } from '@/presentation/helpers'
import { ValidationSpy, GetEventsByIssueNumberSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'

import faker from 'faker'

const mockRequest = (): GetEventsByIssueController.Request => ({
  issueNumber: faker.datatype.number(10)
})

type SutTypes = {
  sut: GetEventsByIssueController
  validationSpy: ValidationSpy
  getEventsByIssueNumberSpy: GetEventsByIssueNumberSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const getEventsByIssueNumberSpy = new GetEventsByIssueNumberSpy()
  const sut = new GetEventsByIssueController(validationSpy, getEventsByIssueNumberSpy)
  return {
    sut,
    validationSpy,
    getEventsByIssueNumberSpy
  }
}

describe('GetEventsByIssueController Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('Should call GetEventsByIssueNumber with correct values', async () => {
    const { sut, getEventsByIssueNumberSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(getEventsByIssueNumberSpy.params).toEqual(request.issueNumber)
  })

  test('Should return 500 if GetEventsByIssueNumber throws', async () => {
    const { sut, getEventsByIssueNumberSpy } = makeSut()
    jest.spyOn(getEventsByIssueNumberSpy, 'get').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut, getEventsByIssueNumberSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(getEventsByIssueNumberSpy.result))
  })
})
