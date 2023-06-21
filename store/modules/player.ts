import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { IPlayerState } from '@/store/modules/index.model'
import { IParentInfo, ITheaterItem } from '@/types/player.interface'

const data = {
  "theaters": [
    {
      "id": 248586,
      "parent_id": 2152,
      "son_title": "小财神男友第一季1",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen1.mp4",
      "num": 1,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248587,
      "parent_id": 2152,
      "son_title": "小财神男友第一季2",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen2.mp4",
      "num": 2,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248588,
      "parent_id": 2152,
      "son_title": "小财神男友第一季3",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen3.mp4",
      "num": 3,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248589,
      "parent_id": 2152,
      "son_title": "小财神男友第一季4",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen4.mp4",
      "num": 4,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248590,
      "parent_id": 2152,
      "son_title": "小财神男友第一季5",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen5.mp4",
      "num": 5,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248591,
      "parent_id": 2152,
      "son_title": "小财神男友第一季6",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen6.mp4",
      "num": 6,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248592,
      "parent_id": 2152,
      "son_title": "小财神男友第一季7",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen7.mp4",
      "num": 7,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248593,
      "parent_id": 2152,
      "son_title": "小财神男友第一季8",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen8.mp4",
      "num": 8,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248594,
      "parent_id": 2152,
      "son_title": "小财神男友第一季9",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen9.mp4",
      "num": 9,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248595,
      "parent_id": 2152,
      "son_title": "小财神男友第一季10",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen10.mp4",
      "num": 10,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248596,
      "parent_id": 2152,
      "son_title": "小财神男友第一季11",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen11.mp4",
      "num": 11,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248597,
      "parent_id": 2152,
      "son_title": "小财神男友第一季12",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen12.mp4",
      "num": 12,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248598,
      "parent_id": 2152,
      "son_title": "小财神男友第一季13",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen13.mp4",
      "num": 13,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248599,
      "parent_id": 2152,
      "son_title": "小财神男友第一季14",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen14.mp4",
      "num": 14,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248600,
      "parent_id": 2152,
      "son_title": "小财神男友第一季15",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen15.mp4",
      "num": 15,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248601,
      "parent_id": 2152,
      "son_title": "小财神男友第一季16",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen16.mp4",
      "num": 16,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248602,
      "parent_id": 2152,
      "son_title": "小财神男友第一季17",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen17.mp4",
      "num": 17,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248603,
      "parent_id": 2152,
      "son_title": "小财神男友第一季18",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen18.mp4",
      "num": 18,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248604,
      "parent_id": 2152,
      "son_title": "小财神男友第一季19",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen19.mp4",
      "num": 19,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248605,
      "parent_id": 2152,
      "son_title": "小财神男友第一季20",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen20.mp4",
      "num": 20,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248606,
      "parent_id": 2152,
      "son_title": "小财神男友第一季21",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen21.mp4",
      "num": 21,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248607,
      "parent_id": 2152,
      "son_title": "小财神男友第一季22",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen22.mp4",
      "num": 22,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248608,
      "parent_id": 2152,
      "son_title": "小财神男友第一季23",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen23.mp4",
      "num": 23,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248609,
      "parent_id": 2152,
      "son_title": "小财神男友第一季24",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen24.mp4",
      "num": 24,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248610,
      "parent_id": 2152,
      "son_title": "小财神男友第一季25",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen25.mp4",
      "num": 25,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248611,
      "parent_id": 2152,
      "son_title": "小财神男友第一季26",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen26.mp4",
      "num": 26,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248612,
      "parent_id": 2152,
      "son_title": "小财神男友第一季27",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen27.mp4",
      "num": 27,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248613,
      "parent_id": 2152,
      "son_title": "小财神男友第一季28",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen28.mp4",
      "num": 28,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248614,
      "parent_id": 2152,
      "son_title": "小财神男友第一季29",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen29.mp4",
      "num": 29,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248615,
      "parent_id": 2152,
      "son_title": "小财神男友第一季30",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen30.mp4",
      "num": 30,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    },
    {
      "id": 248616,
      "parent_id": 2152,
      "son_title": "小财神男友第一季31",
      "son_cover_url": "https://qiniu.rongjuwh.cn/FtpNxdx7Ej9svcKsL1FR8sRNNNQF",
      "son_video_url": "https://expert.jxxmgg.cn/mp4Mxiaocaishen31.mp4",
      "num": 31,
      "tx_id": "",
      "lock": 0,
      "like_num": 0
    }
  ],
  "parent_info": {
    "id": 2152,
    "title": "小财神男友第一季",
    "cover_url": "https://qiniu.rongjuwh.cn/2023/03/34caf2023031421502425.png",
    "vip": 0,
    "share_title": "",
    "share_cover": "",
    "group_ids": "",
    "jump_ids": "564,698,2278,738,2087,1462,3,2062,868,2327,978,867,2023,969,397,490,673,620,1115,1480,2374,886",
    "is_over": 2,
    "total": 31,
    "default_pay_episode": 8,
    "default_pay_amount": 120,
    "class_id": 1,
    "level": "0",
    "configs": null
  }
}

@Module({
  dynamic: true,
  store,
  name: 'player'
})
class Player extends VuexModule implements IPlayerState {
  public parent_info = {} as IParentInfo;
  public theaters = [] as ITheaterItem[];
  public swipeIndex = 0;
  public isShowEndPage = false


  @Mutation
  private SET_SWIPEINDEX (swipeIndex: number) {
    this.swipeIndex = swipeIndex
  }
  @Mutation
  private SET_PARENT_INFO (parent_info: IParentInfo) {
    this.parent_info = Object.assign({}, parent_info) as IParentInfo
  }

  @Mutation
  private SET_THEATERS (theaters: ITheaterItem[]) {
    this.theaters = theaters
  }

  @Action({ rawError: true })
  public SetParentInfo (parent_info: IParentInfo) {
    this.SET_PARENT_INFO(parent_info)
  }

  @Action
  private SetTheaters (theaters: ITheaterItem[]) {
    this.SET_THEATERS(theaters);
  }

  @Action({ rawError: true })
  public SetSwipeIndex (swipeIndex: number) {
    this.SET_SWIPEINDEX(swipeIndex)
  }

  @Action({ rawError: true })
  public SetIsShowEndPage(is: boolean) {
    this.isShowEndPage = is;
  }
}

export const PlayerModule = getModule(Player)
