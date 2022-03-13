import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, ok, noContent } from '@/presentation/helpers'
import { GetEventsByIssueId } from '@/domain/usecases'

export class GetEventsByIssueController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getEventsByIssueId: GetEventsByIssueId
  ) {}

  async handle (request: GetEventsByIssueController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const result = await this.getEventsByIssueId.get(Number(request.issueId))
      return result ? ok(result) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetEventsByIssueController {
  export type Request = {
    issueId: number
  }
}
