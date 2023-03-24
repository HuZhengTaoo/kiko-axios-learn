import { buildURL } from "./helper/utils";
import { AxiosRequestConfig } from "./types";
import xhr from './xhr'

function axios(config: AxiosRequestConfig):void {
  processConfig(config)
  xhr(config)
}

function processConfig (config: AxiosRequestConfig){
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig): string{
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
