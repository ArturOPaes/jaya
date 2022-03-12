export type EventModel = {
  id: string
  action: string
  issue: {
    id: number
    number: number
    [key: string]: any
  }
  [key: string]: any
}
