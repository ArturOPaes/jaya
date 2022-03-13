import { GetEventsByIssueController } from '@/presentation/controllers'
import { badRequest, serverError, ok } from '@/presentation/helpers'
import { ValidationSpy, GetEventsByIssueIdSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'

import faker from 'faker'

const mockRequest = (): GetEventsByIssueController.Request => ({
  issueId: faker.datatype.number(10)
})

type SutTypes = {
  sut: GetEventsByIssueController
  validationSpy: ValidationSpy
  getEventsByIssueIdSpy: GetEventsByIssueIdSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const getEventsByIssueIdSpy = new GetEventsByIssueIdSpy()
  const sut = new GetEventsByIssueController(validationSpy, getEventsByIssueIdSpy)
  return {
    sut,
    validationSpy,
    getEventsByIssueIdSpy
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

  test('Should call GetEventsByIssueId with correct values', async () => {
    const { sut, getEventsByIssueIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(getEventsByIssueIdSpy.params).toEqual(request.issueId)
  })

  test('Should return 500 if GetEventsByIssueId throws', async () => {
    const { sut, getEventsByIssueIdSpy } = makeSut()
    jest.spyOn(getEventsByIssueIdSpy, 'get').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut, getEventsByIssueIdSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(getEventsByIssueIdSpy.result))
  })
})
