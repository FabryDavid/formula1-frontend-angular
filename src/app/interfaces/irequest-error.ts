export interface IRequestError {
  status: number,
  statusText: string,
  ok: boolean,
  message: string,
  error: {
    error: string
  }
}
