import { makeGetEventsByIssueValidation, makeLogControllerDecorator, makeDbGetEventsByIssueNumber } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { GetEventsByIssueController } from '@/presentation/controllers'

export const makeGetEventsByIssueController = (): Controller => {
  const controller = new GetEventsByIssueController(makeGetEventsByIssueValidation(), makeDbGetEventsByIssueNumber())
  return makeLogControllerDecorator(controller)
}
