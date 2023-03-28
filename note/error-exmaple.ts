export interface AxiosError extends Error {
  config: any;
  code?: string;
  request?: any;
  response?: any;
  isAxiosError: boolean;
}

export class AxiosError extends Error {
  constructor(
    message: string,
    config: any,
    code?: string  | undefined,
    request?: any,
    response?: any
  ) {
    super(message);

    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;

    Object.setPrototypeOf(this, AxiosError.prototype);
  }
}

export function createError (
  message: string,
  config: any,
  code?: string | null,
  request?: any,
  response?: any
) {
  const error = new AxiosError(message, config, code, request, response)

  return error
}



createError(`Timeout of  ms exceeded`,{
    config:'haha',
    request:'xx'
})
