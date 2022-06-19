export interface MessageInter<T> {
  Code: number;
  Data: T | null;
  Message: string;
}
