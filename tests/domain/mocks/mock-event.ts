import { AddEvent } from '@/domain/usecases'

import faker from 'faker'

export const mockAddEventParams = (): AddEvent.Params => ({
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
})
