export interface CheckByIssueIdAndIssueUpdatedAtRepository {
  checkByIssueIdAndIssueUpdatedAt: (params: CheckByIssueIdAndIssueUpdatedAtRepository.Params) => Promise<CheckByIssueIdAndIssueUpdatedAtRepository.Result>
}

export namespace CheckByIssueIdAndIssueUpdatedAtRepository {
  export type Params = {
    issueId: number
    updatedAt: string
  }
  export type Result = boolean
}
