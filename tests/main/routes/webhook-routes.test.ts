import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Collection } from 'mongodb'
import { Express } from 'express'
import request from 'supertest'
import faker from 'faker'

let eventCollection: Collection
let app: Express

describe('Webhook Routes', () => {
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

  describe('POST /webhook', () => {
    test.only('Should return 201 on created', async () => {
      const payload = {
        action: faker.name.findName(),
        issue: {
          id: faker.datatype.number(10),
          number: faker.datatype.number(10),
          user: {
            id: faker.datatype.number(10)
          }
        },
        repository: {
          id: faker.datatype.number(10)
        },
        sender: {
          id: faker.datatype.number(10)
        }
      }
      await request(app)
        .post('/api/webhook')
        .send(payload)
        .expect(201)
      await request(app)
        .post('/api/webhook')
        .send(payload)
        .expect(204)
    })
  })
})
