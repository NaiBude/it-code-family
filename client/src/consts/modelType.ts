import { Effect, Subscription, Reducer, ImmerReducer } from 'umi';

export interface ModelType<T> {
  namespace?: string;
  state: T;
  effects?: {
    [fn: string]: Effect;
  };
  reducers?: {
    [fn: string]: Reducer<T>;
  };
  subscriptions?: {
    [fn: string]: Subscription;
  };
}
