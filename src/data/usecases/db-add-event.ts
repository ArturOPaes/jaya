import { AddEvent } from '@/domain/usecases'
import { AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository } from '../protocols'

export class DbAddEvent implements AddEvent {
  constructor (
    private readonly addEventRepository: AddEventRepository,
    private readonly checkByIssueIdAndIssueUpdatedAtRepository: CheckByIssueIdAndIssueUpdatedAtRepository
  ) {}

  async add (eventData: AddEvent.Params): Promise<AddEvent.Result> {
    const exists = await this.checkByIssueIdAndIssueUpdatedAtRepository.checkByIssueIdAndIssueUpdatedAt({
      issueId: eventData.issue.id,
      updatedAt: eventData.issue.updated_at
    })
    let isValid = false
    if (!exists) {
      isValid = await this.addEventRepository.add(eventData)
    }
    return isValid
  }
}
