import { EventModel } from '@/domain/models/event'

export interface GetEventsByIssueNumber {
  get: (issueNumber: number) => Promise<GetEventsByIssueNumber.Result>
}

export namespace GetEventsByIssueNumber {
  export type Result = EventModel[]
}
