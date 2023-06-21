import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { IDeviceState } from '@/store/modules/index.model'

@Module({
  dynamic: true,
  store,
  name: 'device'
})
class Device extends VuexModule implements IDeviceState {
  public isOnline = true; // 网络情况
  public headerData = {}; // 请求头信息
  public readingStartTime = new Date().getTime(); // 开始阅读
  public isRetain = false; // 是否显示用户挽留弹框
  public isShowUnlockTip = false; // 是否显示解锁章节提示
  public isShowOperationTip = false; // 是否显示新手引导提示
  public isNeedReload = false; // 断网造成的视频加载失败是否需要reload
  public isShowPaypal = false; // 是否显示paypal支付弹框

  @Mutation
  private SET_ISSHOWPAYPAL (isShowPaypal: boolean) {
    this.isShowPaypal = isShowPaypal
  }

  @Mutation
  private SET_ISNEEDRELOAD (isNeedReload: boolean) {
    this.isNeedReload = isNeedReload
  }

  @Mutation
  private SET_ISSHOWOPERATIONTIP (isShowOperationTip: boolean) {
    this.isShowOperationTip = isShowOperationTip
  }

  @Mutation
  private SET_HEADERDATA (headerData = {}) {
    this.headerData = JSON.parse(JSON.stringify(headerData))
  }

  @Mutation
  private SET_ISSHOWUNLOCKTIP (isShowUnlockTip: boolean) {
    this.isShowUnlockTip = isShowUnlockTip
  }

  @Mutation
  private SET_ISRETAIN (isRetain: boolean) {
    this.isRetain = isRetain
  }

  @Mutation
  private SET_ISONLINE (is: boolean) {
    this.isOnline = is
  }


  @Action({ rawError: true })
  public SetIsShowPaypal (is: boolean) { // 是否显示paypal支付弹框
    this.SET_ISSHOWPAYPAL(is)
  }

  @Action({ rawError: true })
  public SetIsOnline (is: boolean) {
    this.SET_ISONLINE(is)
  }

  @Action({ rawError: true }) // 断网造成的视频加载失败是否需要reload
  public SetIsNeedReload (isNeedReload: boolean) {
    this.SET_ISNEEDRELOAD(isNeedReload)
  }

  @Action({ rawError: true }) // 是否显示新手引导提示
  public SetIsShowOperationTip (isShowOperationTip: boolean) {
    this.SET_ISSHOWOPERATIONTIP(isShowOperationTip)
  }

  @Action({ rawError: true }) // 是否显示用户挽留弹框
  public SetIsRetain (isRetain: boolean) {
    this.SET_ISRETAIN(isRetain)
  }

  @Action({ rawError: true }) // 是否显示用户挽留弹框
  public SetIsShowUnlockTip (isShowUnlockTip: boolean) {
    this.SET_ISSHOWUNLOCKTIP(isShowUnlockTip)
  }

  @Action({ rawError: true }) // 请求头信息
  public SetHeaderData (headerData = {}) {
    this.SET_HEADERDATA(headerData)
  }
}

export const DeviceModule = getModule(Device)
