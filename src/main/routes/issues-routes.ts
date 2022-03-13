import { adaptRoute } from '@/main/adapters'
import { makeGetEventsByIssueController } from '@/main/factories'
import { auth } from '@/main/middlewares/auth'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/issues/:issueNumber/events', auth, adaptRoute(makeGetEventsByIssueController()))
}
