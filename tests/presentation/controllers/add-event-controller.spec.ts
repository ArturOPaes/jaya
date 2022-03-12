import { AddEventController } from '@/presentation/controllers'
import { badRequest, serverError, created } from '@/presentation/helpers'
import { ValidationSpy, AddEventSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'

import faker from 'faker'

const mockRequest = (): AddEventController.Request => ({
  action: faker.name.findName(),
  issue: {
    id: faker.datatype.number(10),
    number: faker.datatype.number(10),
    user: {
      id: faker.datatype.number(10)
    }
  },
  repository: {
    id: faker.datatype.number(10)
  },
  sender: {
    id: faker.datatype.number(10)
  }
})

type SutTypes = {
  sut: AddEventController
  validationSpy: ValidationSpy
  addEventSpy: AddEventSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addEventSpy = new AddEventSpy()
  const sut = new AddEventController(validationSpy, addEventSpy)
  return {
    sut,
    validationSpy,
    addEventSpy
  }
}

describe('AddEventController Controller', () => {
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

  test('Should call AddEvent with correct values', async () => {
    const { sut, addEventSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(addEventSpy.params).toEqual(request)
  })

  test('Should return 500 if AddEvent throws', async () => {
    const { sut, addEventSpy } = makeSut()
    jest.spyOn(addEventSpy, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 201 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(created())
  })
})
