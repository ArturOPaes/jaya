import { MongoHelper } from '@/infra/db'
import { AddEventRepository, CheckEventByIssueIdRepository } from '@/data/protocols/db'

export class EventMongoRepository implements AddEventRepository, CheckEventByIssueIdRepository {
  async add (data: AddEventRepository.Params): Promise<AddEventRepository.Result> {
    const eventCollection = MongoHelper.getCollection('events')
    const result = await eventCollection.insertOne(data)
    return result.insertedId !== null
  }

  async checkByIssueId (issueId: number): Promise<CheckEventByIssueIdRepository.Result> {
    const eventCollection = MongoHelper.getCollection('events')
    const event = await eventCollection.findOne({
      'issue.id': issueId
    }, {
      projection: {
        _id: 1
      }
    })
    return event !== null
  }
}
