import { Middleware } from '@/presentation/protocols'
import { AuthMiddleware } from '@/presentation/middlewares'

export const makeAuthMiddleware = (user: string, password: string): Middleware => {
  return new AuthMiddleware(user, password)
}
