import { EventModel } from '@/domain/models/event'

export interface GetEventsByIssueId {
  get: (issueId: number) => Promise<GetEventsByIssueId.Result>
}

export namespace GetEventsByIssueId {
  export type Result = EventModel[]
}
