import { DbGetEventsByIssueNumber } from '@/data/usecases'
import { GetEventsByIssueNumber } from '@/domain/usecases'
import { EventMongoRepository } from '@/infra/db'

export const makeDbGetEventsByIssueNumber = (): GetEventsByIssueNumber => {
  const eventMongoRepository = new EventMongoRepository()
  return new DbGetEventsByIssueNumber(eventMongoRepository)
}
