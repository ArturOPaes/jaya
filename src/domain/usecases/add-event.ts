export interface AddEvent {
  add: (event: AddEvent.Params) => Promise<AddEvent.Result>
}

export namespace AddEvent {
  export type Params = {
    action: string
    issue: {
      id: number
      number: number
      [key: string]: any
    }
    [key: string]: any
  }

  export type Result = boolean
}
