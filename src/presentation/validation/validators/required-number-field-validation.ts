import { Validation } from '@/presentation/protocols'
import { InvalidTypeParamError } from '@/presentation/errors'

export class RequiredNumberFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (isNaN(Number(input[this.fieldName]))) {
      return new InvalidTypeParamError(this.fieldName)
    }
  }
}
