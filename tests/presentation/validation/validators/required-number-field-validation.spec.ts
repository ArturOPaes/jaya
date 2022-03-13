import { RequiredNumberFieldValidation } from '@/presentation/validation/validators'
import { InvalidTypeParamError } from '@/presentation/errors'

import faker from 'faker'

const field = faker.random.word()

const makeSut = (): RequiredNumberFieldValidation => {
  return new RequiredNumberFieldValidation(field)
}

describe('RequiredNumberField Validation', () => {
  test('Should return a InvalidTypeParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(new InvalidTypeParamError(field))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ [field]: faker.datatype.number() })
    expect(error).toBeFalsy()
  })
})
