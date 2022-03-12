import { ValidationComposite, RequiredFieldValidation } from '@/presentation/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddEventValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['action', 'issue']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
