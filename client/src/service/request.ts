import Axios, { RequestConfig } from './axios';
import { SERVER_PORT } from '../../config/server.config';

interface RequestConfigInter<T> extends RequestConfig {
  data?: T;
}
interface ResponseInter<T> {
  code: number;
  message: string;
  data: T;
}

const requestObject = new Axios({
  baseURL: `localhost:${SERVER_PORT}`,
  timeout: 1000 * 60,
  interceptors: {
    requestInterceptors: config => {
      console.log('实例请求拦截器');
      return config;
    },
    responseInterceptors: result => {
      console.log('实例响应拦截器');
      return result;
    },
  },
});

const request = <T, K = any>(config: RequestConfigInter<T>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return requestObject.request<ResponseInter<T>>(config);
};

export default request;
