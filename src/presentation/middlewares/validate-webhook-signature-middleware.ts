import { Middleware, HttpResponse } from '@/presentation/protocols'
import { unauthorized, ok, serverError } from '@/presentation/helpers'
import crypto from 'crypto'

export class ValidateSignatureMiddleware implements Middleware {
  constructor (
    private readonly webhookSecret: string
  ) {}

  async handle (request: ValidateSignatureMiddleware.Request): Promise<HttpResponse> {
    try {
      const { headers, body } = request

      if (headers) {
        const expectedSignature = `sha1=${
        crypto.createHmac('sha1', this.webhookSecret)
          .update(JSON.stringify(body))
          .digest('hex')}`

        const signature = request.headers['x-hub-signature']
        if (signature === expectedSignature) {
          return ok({})
        }
      }
      return unauthorized()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace ValidateSignatureMiddleware {
  export type Request = {
    headers: any
    body: any
  }
}
