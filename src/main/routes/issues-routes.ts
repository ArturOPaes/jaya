import { adaptRoute } from '@/main/adapters'
import { makeGetEventsByIssueController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/issues/:issueId/events', adaptRoute(makeGetEventsByIssueController()))
}
