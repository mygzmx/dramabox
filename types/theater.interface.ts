import { key } from '@/store'

export interface INetBannerRes {
  id: number;
  theater_parent_id: number;
  weight: number;
  channel: number;
  created_at: string;
  theater_parent_title: string;
  cover_url: string;
  class_id: number;
  status: number;
  vip: number;
  tag_id: number;
  tag_value: string;
  color: string;
  total: number;
  is_over: number;
}

// [{
//   "id": 42,
//   "theater_parent_id": 1831,
//   "weight": 9,
//   "theater_parent_title": "都市至尊豪婿",
//   "cover_url": "https://qiniu.rongjuwh.cn/FgYIHGwPxf13LWNPFyRGWc_tWGi2",
//   "class_id": 1,
//   "status": 1,
//   "vip": 0,
//   "tag_id": 0,
//   "tag_value": "",
//   "color": "",
//   "channel": 0,
//   "total": 39,
//   "is_over": 2,
//   "created_at": "2022-11-29T15:30:24+08:00"
// }, {
//   "id": 44,
//   "theater_parent_id": 1846,
//   "weight": 7,
//   "theater_parent_title": "回档1990",
//   "cover_url": "https://qiniu.rongjuwh.cn/FsJEMFyGc4Q0AefnTeH7RZRsZ7xZ",
//   "class_id": 3,
//   "status": 1,
//   "vip": 0,
//   "tag_id": 0,
//   "tag_value": "",
//   "color": "",
//   "channel": 0,
//   "total": 82,
//   "is_over": 2,
//   "created_at": "2022-11-29T15:30:48+08:00"
// }]
export interface IClass {id: number; class_name: string; status: number;}
export interface INetAppletRes {
  Applet: IApplet,
  Class: IClass[]
  Index: { id: number; content: string; }[] // banner
}


export interface IIndexContent {
  image_link: string;
  video_id: number;
  sort: number;
  video_name: string;
}

interface IApplet {
  id: number;
  name: string;
  app_id: string;
  add_config: string;
  other_config: string;
}

// "Applet": {
//   "id": 73,
//     "name": "快应用-九州小剧场",
//     "app_id": "wx3e1e4c735213dcb5",
//     "add_config": "{}",
//     "other_config": "{\"debug\":true,\"channel\":\"quickApp\",\"agreement\":false,\"remind\":false}"
// }

const classitem = {
  'id': 1555,
  'title': '痞子战神',
  'cover_url': 'https://qiniu.rongjuwh.cn/FkdMDgSFKPj6bmV4j_GdkvhgRuP7',
  'class_id': 1,
  'vip': 0,
  'is_over': 2,
  'total': 91,
  'tag_id': 0,
  'tag_value': '',
  'color': '',
  'default_pay_episode': 11,
  'default_pay_amount': 120,
  'configs': {
    'parent_id': 0,
    'pay_episode': 0,
    'pay_amount': 0,
    'pop_num': 0,
    'ks_id': '',
    'pop_cover': '',
    'share_url': '',
    'goods_info': [
      {
        'id': 3,
        'name': '5000K币+3000K币',
        'kb_num': 5000,
        'give_kb_num': 3000,
        'expired_day': 14,
        'price': 49,
        'sort': 0,
        'color': 0,
        'is_default': 0,
        'buy_num': 31,
        'is_limit': 0,
        'created_at': '0001-01-01T00:00:00Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'delete_at': null
      },
      {
        'id': 4,
        'name': '3000K币+1500K币',
        'kb_num': 3000,
        'give_kb_num': 1500,
        'expired_day': 7,
        'price': 29,
        'sort': 0,
        'color': 1,
        'is_default': 0,
        'buy_num': 16,
        'is_limit': 0,
        'created_at': '0001-01-01T00:00:00Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'delete_at': null
      },
      {
        'id': 5,
        'name': '10000K币+8000K币',
        'kb_num': 10000,
        'give_kb_num': 8000,
        'expired_day': 14,
        'price': 99,
        'sort': 0,
        'color': 0,
        'is_default': 0,
        'buy_num': 80,
        'is_limit': 0,
        'created_at': '0001-01-01T00:00:00Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'delete_at': null
      },
      {
        'id': 17,
        'name': '2000K币',
        'kb_num': 2000,
        'give_kb_num': 0,
        'expired_day': 7,
        'price': 19.8,
        'sort': 0,
        'color': 0,
        'is_default': 0,
        'buy_num': 0,
        'is_limit': 0,
        'created_at': '0001-01-01T00:00:00Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'delete_at': null
      },
      {
        'id': 20,
        'name': '年费会员(一天一元)',
        'kb_num': 1,
        'give_kb_num': 1,
        'expired_day': 0,
        'price': 365,
        'sort': 0,
        'color': 1,
        'is_default': 0,
        'buy_num': 0,
        'is_limit': 0,
        'created_at': '0001-01-01T00:00:00Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'delete_at': null
      },
      {
        'id': 55,
        'name': '19900K币+20000K币',
        'kb_num': 19900,
        'give_kb_num': 20000,
        'expired_day': 7,
        'price': 199,
        'sort': 0,
        'color': 0,
        'is_default': 0,
        'buy_num': 200,
        'is_limit': 0,
        'created_at': '0001-01-01T00:00:00Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'delete_at': null
      }
    ]
  }
}
export interface INetClassRes {
  id: number;
  title: string;
  cover_url: string;
  class_id: number;
  vip: number;
  is_over: number;
  total: number;
  tag_id: number;
  tag_value: string;
  color: number;
  default_pay_episode: number;
  default_pay_amount: number;
  configs: never[];
}

export interface IClassListItem extends IClass{
  children: INetClassRes[];
}
