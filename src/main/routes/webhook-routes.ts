import { adaptRoute } from '@/main/adapters'
import { makeAddEventController } from '@/main/factories'
import { validateWebhookSignature } from '@/main/middlewares/validate-webhook-signature'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/webhook', validateWebhookSignature, adaptRoute(makeAddEventController()))
}
