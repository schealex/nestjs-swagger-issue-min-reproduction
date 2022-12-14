export interface IResponseMessage {
  msg: string;
  code?: string;
  data?: any;
  reference?: any;
  error?: Error;
}

export interface IResponseMessages {
  messages: IResponseMessage[];
}
