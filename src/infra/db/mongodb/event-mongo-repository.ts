import { MongoHelper } from '@/infra/db'
import { AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository, GetEventsByIssueNumberRepository } from '@/data/protocols/db'

export class EventMongoRepository implements AddEventRepository, CheckByIssueIdAndIssueUpdatedAtRepository, GetEventsByIssueNumberRepository {
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

  async get (issueNumber: GetEventsByIssueNumberRepository.Params): Promise<GetEventsByIssueNumberRepository.Result> {
    const eventCollection = MongoHelper.getCollection('events')
    const events = await eventCollection.find({
      'issue.number': issueNumber
    }).toArray()
    return MongoHelper.mapCollection(events)
  }
}
