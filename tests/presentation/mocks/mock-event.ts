import { AddEvent, GetEventsByIssueId } from '@/domain/usecases'
import { mockEvent } from '@/tests/domain/mocks'

export class AddEventSpy implements AddEvent {
  params: AddEvent.Params
  result = true

  async add (params: AddEvent.Params): Promise<AddEvent.Result> {
    this.params = params
    return this.result
  }
}

export class GetEventsByIssueIdSpy implements GetEventsByIssueId {
  params: number
  result = [mockEvent()]

  async get (params: number): Promise<GetEventsByIssueId.Result> {
    this.params = params
    return this.result
  }
}
