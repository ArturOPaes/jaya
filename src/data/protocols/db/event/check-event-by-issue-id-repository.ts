export interface CheckEventByIssueIdRepository {
  checkByIssueId: (issueId: number) => Promise<CheckEventByIssueIdRepository.Result>
}

export namespace CheckEventByIssueIdRepository {
  export type Result = boolean
}
