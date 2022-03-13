import { AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository, GetEventsByIssueNumberRepository } from '@/data/protocols'
import { mockEvent } from '@/tests/domain/mocks'

export class AddEventRepositorySpy implements AddEventRepository {
  params: AddEventRepository.Params
  result = true

  async add (params: AddEventRepository.Params): Promise<AddEventRepository.Result> {
    this.params = params
    return this.result
  }
}

export class CheckByIssueIdAndIssueUpdatedAtRepositorySpy implements CheckByIssueIdAndIssueUpdatedAtRepository {
  params: CheckByIssueIdAndIssueUpdatedAtRepository.Params
  result = false

  async checkByIssueIdAndIssueUpdatedAt (params: CheckByIssueIdAndIssueUpdatedAtRepository.Params): Promise<CheckByIssueIdAndIssueUpdatedAtRepository.Result> {
    this.params = params
    return this.result
  }
}

export class GetEventsByIssueNumberRepositorySpy implements GetEventsByIssueNumberRepository {
  params: GetEventsByIssueNumberRepository.Params
  result = [mockEvent()]

  async get (params: GetEventsByIssueNumberRepository.Params): Promise<GetEventsByIssueNumberRepository.Result> {
    this.params = params
    return this.result
  }
}
