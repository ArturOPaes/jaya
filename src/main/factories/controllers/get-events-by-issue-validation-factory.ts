import { ValidationComposite, RequiredFieldValidation, RequiredNumberFieldValidation } from '@/presentation/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeGetEventsByIssueValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  validations.push(new RequiredFieldValidation('issueNumber'))
  validations.push(new RequiredNumberFieldValidation('issueNumber'))
  return new ValidationComposite(validations)
}
