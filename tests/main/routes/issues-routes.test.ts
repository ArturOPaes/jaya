import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Collection , ObjectId } from 'mongodb'
import { Express } from 'express'
import request from 'supertest'
import { mockedEvent } from '@/tests/domain/mocks'

let eventCollection: Collection
let app: Express

describe('Issues Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    eventCollection = MongoHelper.getCollection('events')
    await eventCollection.deleteMany({})
  })

  describe('GET /issues/:issueNumber/events', () => {
    test.only('Should return 200 on success', async () => {
      const mock = mockedEvent()
      const event = await eventCollection.insertOne(mock)
      const { _id, ...rest } = mock
      const res = await request(app)
        .get(`/api/issues/${mock.issue.number}/events`)
        .send()

      expect(res.status).toBe(200)
      expect(res.body).toEqual([{
        id: new ObjectId(event.insertedId).toString(),
        ...rest
      }])
    })
  })
})
