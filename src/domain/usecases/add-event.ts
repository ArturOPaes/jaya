export interface AddEvent {
  add: (event: AddEvent.Params) => Promise<AddEvent.Result>
}

export namespace AddEvent {
  export type Params = {
    action: string
    issue: {
      id: number
      number: number
      created_at: string
      updated_at: string
      [key: string]: any
    }
    [key: string]: any
  }

  export type Result = boolean
}
