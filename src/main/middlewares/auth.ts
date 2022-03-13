import { adaptMiddleware } from '@/main/adapters'
import { makeAuthMiddleware } from '@/main/factories'
import env from '@/main/config/env'

export const auth = adaptMiddleware(makeAuthMiddleware(env.basicAuth.user, env.basicAuth.password))
