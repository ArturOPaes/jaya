import { AddEvent } from '@/domain/usecases'
import { AddEventRepository, CheckEventByIssueIdRepository } from '../protocols'

export class DbAddEvent implements AddEvent {
  constructor (
    private readonly addEventRepository: AddEventRepository,
    private readonly checkEventByIssueIdRepository: CheckEventByIssueIdRepository
  ) {}

  async add (eventData: AddEvent.Params): Promise<AddEvent.Result> {
    const exists = await this.checkEventByIssueIdRepository.checkByIssueId(eventData.issue.id)
    let isValid = false
    if (!exists) {
      isValid = await this.addEventRepository.add(eventData)
    }
    return isValid
  }
}
