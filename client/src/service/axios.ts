import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestInterceptors {
  //请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  //响应拦截
  responseInterceptors?: <T = AxiosResponse>(data: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

class Request {
  instance: AxiosInstance;

  interceptorsObj?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    this.instance.interceptors.request.use(
      (req: AxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return req;
      },
      (err: any) => err,
    );
    //使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    );
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');
        return res.data;
      },
      (err: any) => err,
    );
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      this.instance
        .request<any, T>(config)
        .then(data => {
          if (config.interceptors?.responseInterceptors) {
            data = config.interceptors.responseInterceptors(data);
          }
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}
export default Request;
