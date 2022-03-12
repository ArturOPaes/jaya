import { Middleware } from '@/presentation/protocols'
import { ValidateSignatureMiddleware } from '@/presentation/middlewares'

export const makeValidateSignatureMiddleware = (webhookSecret: string): Middleware => {
  return new ValidateSignatureMiddleware(webhookSecret)
}
