import { AddEvent, GetEventsByIssueNumber } from '@/domain/usecases'
import { mockEvent } from '@/tests/domain/mocks'

export class AddEventSpy implements AddEvent {
  params: AddEvent.Params
  result = true

  async add (params: AddEvent.Params): Promise<AddEvent.Result> {
    this.params = params
    return this.result
  }
}

export class GetEventsByIssueNumberSpy implements GetEventsByIssueNumber {
  params: number
  result = [mockEvent()]

  async get (params: number): Promise<GetEventsByIssueNumber.Result> {
    this.params = params
    return this.result
  }
}
