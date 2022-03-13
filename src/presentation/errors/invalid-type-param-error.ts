export class InvalidTypeParamError extends Error {
  constructor (paramName: string) {
    super(`Invalid type for: ${paramName}`)
    this.name = 'InvalidTypeParamError'
  }
}
