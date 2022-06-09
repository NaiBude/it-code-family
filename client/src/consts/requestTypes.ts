export interface ResponseType<T> {
  Code: number;
  Message: string;
  Data: T;
}
