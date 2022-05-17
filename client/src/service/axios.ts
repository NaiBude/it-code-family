import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors {
  //请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  //响应拦截
  responseInterceptors?: <T = AxiosResponse>(data: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

export interface CancelRequestSource {
  [index: string]: () => void;
}

class Axios {
  instance: AxiosInstance;

  interceptorsObj?: RequestInterceptors;

  cancelRequestSourceList?: CancelRequestSource[];

  requestUrlList?: string[];

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    this.requestUrlList = [];
    this.cancelRequestSourceList = [];
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
      const { url } = config;
      if (url) {
        this.requestUrlList?.push(url);
        config.cancelToken = new axios.CancelToken(c => {
          this.cancelRequestSourceList?.push({
            [url]: c,
          });
        });
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
        })
        .finally(() => {
          url && this.delUrl(url);
        });
    });
  }

  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex((item: CancelRequestSource) => {
      return Object.keys(item)[0] === url;
    }) as number;
  }

  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex(u => u === url);
    const sourceIndex = this.getSourceIndex(url);
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex, 1);
    sourceIndex !== -1 && this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
  }

  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach(source => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }

  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      const sourceIndex = this.getSourceIndex(url);
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]();
    } else {
      url.forEach(u => {
        const sourceIndex = this.getSourceIndex(u);
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]();
      });
    }
  }
}
export default Axios;
