import { EventModel } from '@/domain/models/event'

export interface GetEventsByIssueNumberRepository {
  get: (data: GetEventsByIssueNumberRepository.Params) => Promise<GetEventsByIssueNumberRepository.Result>
}

export namespace GetEventsByIssueNumberRepository {
  export type Params = number
  export type Result = EventModel[]
}
