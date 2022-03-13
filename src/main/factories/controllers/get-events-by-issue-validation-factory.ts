import { ValidationComposite, RequiredFieldValidation, RequiredNumberFieldValidation } from '@/presentation/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeGetEventsByIssueValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  validations.push(new RequiredFieldValidation('issueId'))
  validations.push(new RequiredNumberFieldValidation('issueId'))
  return new ValidationComposite(validations)
}
