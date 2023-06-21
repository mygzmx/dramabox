import { INetPlayerInfoRes, IParentInfo } from '@/types/player.interface'
import { INetLoginRes } from '@/types/self.interface'
/** app */
export interface IAppState {
  recommendData: IParentInfo;
}

/** Device */
export interface IDeviceState {
  isOnline: boolean;
  isRetain: boolean;
  isShowUnlockTip: boolean;
  isShowOperationTip: boolean; // 是否显示新手引导提示
  isNeedReload: boolean;
}

/** Chapters */
export interface IChaptersState {
  tabIndex: number;
  totalChapters: number;
  isShowDrama: boolean;
}

export interface IUserState {
  userInfo: INetLoginRes;
}

export interface IPlayerState extends INetPlayerInfoRes {
  swipeIndex: number;
  isShowEndPage: boolean;
}
