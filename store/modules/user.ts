import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { IUserState } from '@/store/modules/index.model'
import { INetLoginRes } from '@/types/self.interface'

@Module({
  dynamic: true,
  store,
  name: 'user'
})
class User extends VuexModule implements IUserState {
  public userInfo = {
    "id": 5223,
    "nickname": "2431880897",
    "heading_url": "https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-avator-bg.png",
    "undid": "yarrD1C_10gI9yQwwn3swNzyqZQF-J8m8Ocvhssg",
    "open_id": "kgXxR5D5s1uPgNvWy9BBKt2A9ENSDKBvatHg1TnJKLnJwFaf3Gvt80hnvvc6mBQv",
    "request_id": "",
    "vip_time": "",
    "kb": 0,
    "gzh_id": "xiaomi",
    "put_link_id": "",
    "channel": 0,
    "system": 0,
    "give_kb_num": 200,
    "ad_id": "",
    "callback": "",
    "created_at": "2022-11-30T12:08:08+08:00",
    "is_new": false
  }

  @Mutation
  private SET_USERINFO (userInfo: INetLoginRes) {
    this.userInfo = Object.assign({}, userInfo) as INetLoginRes
  }

  @Action({ rawError: true }) // 请求头信息
  public SetUserInfo (userInfo: INetLoginRes) {
    this.SET_USERINFO(userInfo)
  }
}

export const UserModule = getModule(User)
