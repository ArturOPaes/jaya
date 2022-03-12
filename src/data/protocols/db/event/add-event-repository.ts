import { AddEvent } from '@/domain/usecases'

export interface AddEventRepository {
  add: (data: AddEventRepository.Params) => Promise<AddEventRepository.Result>
}

export namespace AddEventRepository {
  export type Params = AddEvent.Params
  export type Result = boolean
}
