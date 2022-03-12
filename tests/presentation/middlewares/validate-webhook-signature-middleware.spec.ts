import { ValidateSignatureMiddleware } from '@/presentation/middlewares'
import { forbidden, ok } from '@/presentation/helpers'
import { AccessDeniedError } from '@/presentation/errors'
import faker from 'faker'
import crypto from 'crypto'

const payload = {
  action: faker.name.findName(),
  issue: {
    id: faker.datatype.number(10),
    number: faker.datatype.number(10),
    user: {
      id: faker.datatype.number(10)
    }
  },
  repository: {
    id: faker.datatype.number(10)
  },
  sender: {
    id: faker.datatype.number(10)
  }
}

const mockRequest = (): ValidateSignatureMiddleware.Request => ({
  body: payload,
  headers: {
    'x-hub-signature': `sha1=${crypto.createHmac('sha1', 'secret').update(JSON.stringify(payload)).digest('hex')}`
  }
})

type SutTypes = {
  sut: ValidateSignatureMiddleware
  secret: string
}

const makeSut = (): SutTypes => {
  const secret = 'secret'
  const sut = new ValidateSignatureMiddleware(secret)
  return {
    sut,
    secret
  }
}

describe('ValidateSignature Middleware', () => {
  test('Should return 403 if no x-hub-signature exists in headers', async () => {
    const { sut } = makeSut()
    const request = mockRequest()
    const httpResponse = await sut.handle({ body: request.body, headers: {} })
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  test('Should return 200 if x-hub-signature is valid', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok({}))
  })
})
