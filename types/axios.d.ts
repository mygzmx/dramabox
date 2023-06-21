import { AxiosRequestConfig } from 'axios'
declare module 'axios' {
  export interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
    // store: RootState
  }
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
