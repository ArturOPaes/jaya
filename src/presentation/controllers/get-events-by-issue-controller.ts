import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, ok, noContent } from '@/presentation/helpers'
import { GetEventsByIssueNumber } from '@/domain/usecases'

export class GetEventsByIssueController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getEventsByIssueNumber: GetEventsByIssueNumber
  ) {}

  async handle (request: GetEventsByIssueController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const result = await this.getEventsByIssueNumber.get(Number(request.issueNumber))
      return result ? ok(result) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetEventsByIssueController {
  export type Request = {
    issueNumber: number
  }
}
