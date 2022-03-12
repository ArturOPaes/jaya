import { AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository } from '@/data/protocols'

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
