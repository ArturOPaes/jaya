import { DbAddEvent } from '@/data/usecases'
import { AddEvent } from '@/domain/usecases'
import { EventMongoRepository } from '@/infra/db'

export const makeDbAddEvent = (): AddEvent => {
  const eventMongoRepository = new EventMongoRepository()
  return new DbAddEvent(eventMongoRepository, eventMongoRepository)
}
