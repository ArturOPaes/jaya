import { DbGetEventsByIssueId } from '@/data/usecases'
import { GetEventsByIssueId } from '@/domain/usecases'
import { EventMongoRepository } from '@/infra/db'

export const makeDbGetEventsByIssueId = (): GetEventsByIssueId => {
  const eventMongoRepository = new EventMongoRepository()
  return new DbGetEventsByIssueId(eventMongoRepository)
}
