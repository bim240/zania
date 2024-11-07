/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios'

import {API_END_POINT_V1} from './config'

export const apiAxiosV1 = axios.create({
  baseURL: API_END_POINT_V1 as string | undefined,
  timeout: 120000,
  adapter: 'xhr',
})

const axiosInstances = [apiAxiosV1]

axiosInstances.forEach(instance => {
  instance.defaults.headers.common['Content-Type'] = 'application/json'

  // * all request interceptors
  instance.interceptors.request.use(onlineStatusInterceptor)
  instance.interceptors.request.use(addAuthKeyInterceptor)

  // * all response interceptors
  instance.interceptors.response.use(reportAPILatency, processNetworkErrors)
})

function reportAPILatency(resp: AxiosResponse) {
  // add latency reporter
  return resp
}
function onlineStatusInterceptor(config: InternalAxiosRequestConfig) {
  if (!checkIfNetworkStillAlive()) {
    //show a toast that user is offline
  }
  return config
}

function addAuthKeyInterceptor(config: InternalAxiosRequestConfig) {
  const headers = config.headers || {}
  const authKey = localStorage.getItem('auth_key')

  if (authKey) headers['auth-key'] = authKey
  config.headers = headers

  return config
}

async function processNetworkErrors(err: AxiosError) {
  if (err?.code === AxiosError.ERR_NETWORK) {
    return err
  }
  const status = err?.response?.status

  if (status === STATUS_CODE.BAD_REQUEST) {
    // show toast for bad request
  }

  if (
    status === STATUS_CODE.UNAUTHORIZED ||
    status === STATUS_CODE.FORBIDDEN ||
    status === STATUS_CODE.NOT_ALLOWED
  ) {
    //show toast for unathorised access
    // logout user from here
  }

  if (status === STATUS_CODE.GATEWAY_TIMEOUT) {
    //show toast message upon timeout
  }

  return Promise.reject(err)
}

function checkIfNetworkStillAlive() {
  const isOnline = navigator.onLine
  return isOnline
}

const STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_ALLOWED: 405,
  ENTITY_TOO_LARGE: 413,
  GATEWAY_TIMEOUT: 504,
}
