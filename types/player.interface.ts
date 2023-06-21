export enum EnumLock {
  lock = 0,
  unlock = 1,
}

export interface INetPlayerInfoRes {
  parent_info: IParentInfo;
  theaters: ITheaterItem[];
}

export interface ITheaterItem {
  id: number;
  parent_id: number;
  son_title: string;
  son_cover_url: string;
  son_video_url: string;
  num: number;
  tx_id: string;
  lock: EnumLock
  like_num: number;
}

export interface IParentInfo {
  id: number;
  title: string;
  cover_url: string;
  vip: number;
  share_title: string;
  share_cover: string;
  group_ids: string;
  jump_ids: string;
  is_over: number;
  total: number;
  default_pay_episode: number;
  default_pay_amount: number;
}
