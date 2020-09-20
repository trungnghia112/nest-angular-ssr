export interface ErrorResponse {
  error: {
    data: any;
    meta: {
      messages: string
    }
  };
  headers: any;
  message: string;
  name: string,
  ok: boolean,
  status: number,
  statusText: string,
  url: string
}

export interface DataResponse {
  data: any;
  meta: {
    messages?: string,
    pagination?: any
  }
}
