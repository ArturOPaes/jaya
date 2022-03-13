import { MongoHelper } from '@/infra/db'
import { AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository, GetEventsByIssueIdRepository } from '@/data/protocols/db'

export class EventMongoRepository implements AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository, GetEventsByIssueIdRepository {
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

  async get (issueId: GetEventsByIssueIdRepository.Params): Promise<GetEventsByIssueIdRepository.Result> {
    const eventCollection = MongoHelper.getCollection('events')
    const events = await eventCollection.find({
      'issue.id': issueId
    }).toArray()
    return MongoHelper.mapCollection(events)
  }
}
