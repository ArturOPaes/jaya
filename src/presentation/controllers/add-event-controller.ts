import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, created, noContent } from '@/presentation/helpers'
import { AddEvent } from '@/domain/usecases'

export class AddEventController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addEvent: AddEvent
  ) {}

  async handle (request: AddEventController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const result = await this.addEvent.add(request)
      return result ? created() : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddEventController {
  export type Request = AddEvent.Params
}
