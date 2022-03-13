import { GetEventsByIssueNumber } from '@/domain/usecases'
import { GetEventsByIssueNumberRepository } from '../protocols'

export class DbGetEventsByIssueNumber implements GetEventsByIssueNumber {
  constructor (
    private readonly getEventsByIssueNumberRepository: GetEventsByIssueNumberRepository
  ) {}

  async get (issueNumber: number): Promise<GetEventsByIssueNumber.Result> {
    return await this.getEventsByIssueNumberRepository.get(issueNumber)
  }
}
