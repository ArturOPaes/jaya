import { EventModel } from '@/domain/models/event'

export interface GetEventsByIssueIdRepository {
  get: (data: GetEventsByIssueIdRepository.Params) => Promise<GetEventsByIssueIdRepository.Result>
}

export namespace GetEventsByIssueIdRepository {
  export type Params = number
  export type Result = EventModel[]
}
