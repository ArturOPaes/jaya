import { AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository, GetEventsByIssueIdRepository } from '@/data/protocols'
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

export class GetEventsByIssueIdRepositorySpy implements GetEventsByIssueIdRepository {
  params: GetEventsByIssueIdRepository.Params
  result = [mockEvent()]

  async get (params: GetEventsByIssueIdRepository.Params): Promise<GetEventsByIssueIdRepository.Result> {
    this.params = params
    return this.result
  }
}
