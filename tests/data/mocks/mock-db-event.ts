import { AddEventRepository, CheckEventByIssueIdRepository } from '@/data/protocols'

export class AddEventRepositorySpy implements AddEventRepository {
  params: AddEventRepository.Params
  result = true

  async add (params: AddEventRepository.Params): Promise<AddEventRepository.Result> {
    this.params = params
    return this.result
  }
}

export class CheckEventByIssueIdRepositorySpy implements CheckEventByIssueIdRepository {
  issueId: number
  result = false

  async checkByIssueId (issueId: number): Promise<CheckEventByIssueIdRepository.Result> {
    this.issueId = issueId
    return this.result
  }
}
