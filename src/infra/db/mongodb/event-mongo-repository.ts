import { MongoHelper } from '@/infra/db'
import { AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository } from '@/data/protocols/db'

export class EventMongoRepository implements AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository {
  checkByIssueIdAndIssueUpdateddAt: (params: CheckByIssueIdAndIssueUpdatedAtRepository.Params) => Promise<boolean>
  async add (data: AddEventRepository.Params): Promise<AddEventRepository.Result> {
    const eventCollection = MongoHelper.getCollection('events')
    const result = await eventCollection.insertOne(data)
    return result.insertedId !== null
  }

  async checkByIssueIdAndIssueUpdatedAt (params: CheckByIssueIdAndIssueUpdatedAtRepository.Params): Promise<CheckByIssueIdAndIssueUpdatedAtRepository.Result> {
    const eventCollection = MongoHelper.getCollection('events')
    const event = await eventCollection.findOne({
      'issue.id': params.issueId,
      'issue.updated_at': params.updatedAt
    }, {
      projection: {
        _id: 1
      }
    })
    return event !== null
  }
}
