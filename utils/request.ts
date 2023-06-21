import axios, { AxiosResponse, AxiosError, AxiosRequestConfig, Canceler } from 'axios'

// 测试 http://192.168.1.70:89/
// 预发布 https://yfb-player-feat.klynf.com/
// 线上: https://player-feat.klynf.com/
export const tempPub = JSON.parse('{"clientAgent":"svnVer_2211040047","mchid":"GG1000000","mbid":"","city":"%E4%BA%9A%E5%A4%AA%E5%9C%B0%E5%8C%BA","screen":"1080x2175","appCode":"f002","imsi":"","deviceId":"dzb3bc64c387d24260a239dded301a3e1b","lsw":"1","apiVersion":"1.4.3.100066","province":"%E4%BA%9A%E5%A4%AA%E5%9C%B0%E5%8C%BA","model":"Redmi K30","brand":"Redmi","apn":"wifi","channelCode":"GG1000000","install_time":"1667563200000","dzPaySupport":"2","os":"android29","pname":"com.dz.xsdq","utdid":"1edeeb88-756c-489a-bdf3-f85e6cbc7cd3","en":"{\\"adsdk\\":\\"2\\"}","channelFee":"Google","time_zone":"+0800","userId":"25069","lpp":"{\\"notifySwitch\\":\\"1\\",\\"$os_version\\":\\"10\\",\\"$manufacturer\\":\\"Xiaomi\\"}","adjustAdid":"5530a0b57643b80a3f9d352791bbe91f","chid":"GG1000000","p":"67","subPline":"2","afu":"0","cmTel":"","v":"4","phone_time":"2022-11-11","imei":"","macAddr":"A4:45:19:D0:6B:2B"}')

enum EBaseUrlEnvironment {
  test = 'http://192.168.0.241:4080',
  staging = 'http://yfb.klynf.com',
  production = 'https://api.klynf.com',
}
// 定义接口
interface PendingType {
  url?: string;
  method?: string;
  params: any;
  data: any;
  cancel: () => void;
}

// 取消重复请求
const pending: PendingType[] = [];
const CancelToken = axios.CancelToken;

const Service = axios.create({
  // baseURL: '',
  withCredentials: true,
  timeout: 10 * 1000
});

// 添加请求拦截器
Service.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    // request.data = {
    //   pri: { ...request.data },
    //   pub: tempPub,
    // }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    request.headers['App-Origin'] = 'wx3e1e4c735213dcb5'
    request.cancelToken = new CancelToken((c: Canceler) => {
      pending.push({
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c
      });
    });
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
Service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      if (response.data.pri) {
        return Promise.resolve(response.data.pri)
      }
      if (response.data.code === 200 || response.data.data) {
        return Promise.resolve(response.data.data)
      }
      return Promise.resolve('BadRequest')
    }
    return Promise.resolve('BadRequest')
  },
  (err: AxiosError) => {
    console.error('err code-------->', err.code);
    console.error('err config url-------->', err.config?.url);
    return Promise.resolve('BadRequest')
  }
);

export default Service
