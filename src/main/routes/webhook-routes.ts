import { adaptRoute } from '@/main/adapters'
import { makeAddEventController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/webhook', adaptRoute(makeAddEventController()))
}
