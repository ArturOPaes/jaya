import { AuthMiddleware } from '@/presentation/middlewares'
import { forbidden, ok } from '@/presentation/helpers'
import { AccessDeniedError } from '@/presentation/errors'
import env from '@/main/config/env'

const mockRequest = (): AuthMiddleware.Request => ({
  headers: {
    authorization: Buffer.from(env.basicAuth.user + ':' + env.basicAuth.password).toString('base64')
  }
})

type SutTypes = {
  sut: AuthMiddleware
}

const makeSut = (): SutTypes => {
  const sut = new AuthMiddleware(env.basicAuth.user, env.basicAuth.password)
  return {
    sut
  }
}

describe('AuthMiddleware Middleware', () => {
  test('Should return 403 if no x-hub-signature exists in headers', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({ headers: {} })
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  test('Should return 200 if authorization is valid', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok({}))
  })
})
