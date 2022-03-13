import { adaptMiddleware } from '@/main/adapters'
import { makeValidateSignatureMiddleware } from '@/main/factories'
import env from '@/main/config/env'

export const validateWebhookSignature = adaptMiddleware(makeValidateSignatureMiddleware(env.secretWebhook))
