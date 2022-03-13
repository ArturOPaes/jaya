import { GetEventsByIssueId } from '@/domain/usecases'
import { GetEventsByIssueIdRepository } from '../protocols'

export class DbGetEventsByIssueId implements GetEventsByIssueId {
  constructor (
    private readonly getEventsByIssueIdRepository: GetEventsByIssueIdRepository
  ) {}

  async get (issueId: number): Promise<GetEventsByIssueId.Result> {
    return await this.getEventsByIssueIdRepository.get(issueId)
  }
}
