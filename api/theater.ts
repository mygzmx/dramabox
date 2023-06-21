import Service from '@/utils/request'
import { IClassListItem, IIndexContent, INetAppletRes, INetClassRes } from '@/types/theater.interface'
import { rejects } from "assert";

/**
 * 书城接口
 */
// export const netTheater = async (): Promise<any> => {
//   return await Service.post('/asg/portal/call/258.do', {
//     "key_sign": "c8ddf89de6fa20c1c1c41155c0fe8db8",
//     "type": "1",
//     "channel_id": "88",
//     "readpref": "0"
//   })
// }

export const netApplet = async (): Promise<{ bannerList: IIndexContent[], classData: IClassListItem[] }> => {
  return new Promise(async (resolve, reject ) => {
    await Service('/api/applet/config', {
      method: "GET",
      onResponse({ request, response, options }) {
        const { Applet, Index = [], Class = [] } = response._data.data as INetAppletRes;
        const bannerList = Index.map(val => JSON.parse(val.content) as IIndexContent);
        const classData = Class.map(val => ({ ...val, children: [] })) as IClassListItem[];
        resolve({ bannerList, classData })
      },
    })
  })
}


export const netClass = async (class_ids: string): Promise<INetClassRes[]> => {
  return new Promise(async (resolve, reject) => {
    await Service('/api/parent/class/index', {
      method: "POST",
      body: JSON.stringify({ class_ids }),
      onResponse({ request, response, options }) {
        resolve(response._data.data)
      },
    })
  })
}

//
// const { data: configData } = await $fetch('/api/applet/config',
//   {
//     baseURL: 'https://zf.jxjzwh.cn',
//     method: "get",
//     onRequest({ request, options }) {
//       // Set the request headers
//       options.headers = options.headers || {}
//       options.headers['App-Origin'] = 'wx3e1e4c735213dcb5'
//     },
//     onRequestError({ request, options, error }) {
//       // Handle the request errors
//     },
//     async onResponse({ request, response, options }) {
//       const { Applet, Index = [], Class = [] } = response._data.data;
//       bannerList.value = Index.map(val => JSON.parse(val.content) as IIndexContent);
//       classData.value = Class.map(val => ({ ...val, children: [] })) as IClassListItem[];
//     },
//     onResponseError({ request, response, options }) {
//       // Handle the response errors
//     }
//   });
