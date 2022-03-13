import { Middleware, HttpResponse } from '@/presentation/protocols'
import { forbidden, ok, serverError } from '@/presentation/helpers'
import { AccessDeniedError } from '@/presentation/errors'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly user: string,
    private readonly password: string,
  ) {}

  async handle (request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { headers } = request
      if (headers && headers['authorization']) {
        const [user, password] = Buffer.from(headers['authorization'].replace('Basic ', ''), 'base64').toString().split(':')
        if (user === this.user && password === this.password) {
          return ok({})
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    headers: any
  }
}
