import { AddEvent } from '@/domain/usecases'

export class AddEventSpy implements AddEvent {
  params: AddEvent.Params
  result = true

  async add (params: AddEvent.Params): Promise<AddEvent.Result> {
    this.params = params
    return this.result
  }
}
