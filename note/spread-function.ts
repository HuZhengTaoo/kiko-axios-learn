interface AxiosConfig {
  url: string;
}

export interface AxiosInterface {
  request(config: AxiosConfig): any;
  get(url: string, config?: AxiosConfig): any;
  delete(url: string, config?: AxiosConfig): any;
  head(url: string, config?: AxiosConfig): any;
  options(url: string, config?: AxiosConfig): any;
  post(url: string, data?: any, config?: AxiosConfig): any;
  put(url: string, data?: any, config?: AxiosConfig): any;
  patch(url: string, data?: any, config?: AxiosConfig): any;

}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): any;
}

export interface AxiosRequestConfig {
  url?: string
}

const dispatchRequest: (config: AxiosRequestConfig) => any = (config)=>{
  return config
}

export default class Axios {
  request(config:AxiosRequestConfig): any {
    return dispatchRequest(config)
  }
  get(url: string, config?: AxiosRequestConfig): any {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config?: AxiosRequestConfig): any {
    return this._requestMethodWithoutData('delete', url, config)
  }

  head(url: string, config?: AxiosRequestConfig): any {
    return this._requestMethodWithoutData('head', url, config)
  }

  options(url: string, config?: AxiosRequestConfig): any {
    return this._requestMethodWithoutData('options', url, config)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): any {
    return this._requestMethodWithData('post', url, data, config)
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): any {
    return this._requestMethodWithData('put', url, data, config)
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): any {
    return this._requestMethodWithData('patch', url, data, config)
  }
  _requestMethodWithoutData(method:any, url:string, config?:AxiosRequestConfig){
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    )
  }
  _requestMethodWithData(method: any, url: string, data?: any, config?: AxiosRequestConfig){
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    )
  }
}
