import { Validation } from '@/presentation/protocols'
import { InvalidTypeParamError } from '@/presentation/errors'

export class RequiredNumberFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    try {
      if (isNaN(Number(input[this.fieldName]))) {
        return new InvalidTypeParamError(this.fieldName)
      }
    } catch (e) {
      return new InvalidTypeParamError(this.fieldName)
    }
  }
}
