import { makeAddEventValidation, makeLogControllerDecorator, makeDbAddEvent } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddEventController } from '@/presentation/controllers'

export const makeAddEventController = (): Controller => {
  const controller = new AddEventController(makeAddEventValidation(), makeDbAddEvent())
  return makeLogControllerDecorator(controller)
}
