import { makeGetEventsByIssueValidation, makeLogControllerDecorator, makeDbGetEventsByIssueId } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { GetEventsByIssueController } from '@/presentation/controllers'

export const makeGetEventsByIssueController = (): Controller => {
  const controller = new GetEventsByIssueController(makeGetEventsByIssueValidation(), makeDbGetEventsByIssueId())
  return makeLogControllerDecorator(controller)
}
