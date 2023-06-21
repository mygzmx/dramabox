import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { IChaptersState } from '@/store/modules/index.model'

@Module({
  dynamic: true,
  store,
  name: 'chapters'
})
class Chapters extends VuexModule implements IChaptersState {
  public totalChapters = 0; // 章节总数
  public tabIndex = 0; // 章节分页
  public isShowDrama = false; // 是否显示追剧按钮
  public isPayVisible = false; // 是否唤起付费窗口
  public isCatalogPopupVisible = false; // 是否显示章节列表

  @Mutation
  private SET_ISCATALOGPOPUPVISIBLE (isCatalogPopupVisible: boolean) {
    this.isCatalogPopupVisible = isCatalogPopupVisible
  }

  @Mutation
  private SET_ISPAYVISIBLE (isPayVisible: boolean) {
    this.isPayVisible = isPayVisible
  }

  @Mutation
  private SET_ISSHOWDRAMA (isShowDrama: boolean) {
    this.isShowDrama = isShowDrama
  }

  @Mutation
  private SET_TOTALCHAPTERS (total: number) {
    this.totalChapters = total
  }

  @Mutation
  private SET_TABINDEX (index: number) {
    this.tabIndex = index
  }

  @Action({ rawError: true })
  public SetTabIndex (index: number) {
    this.SET_TABINDEX(index)
  }

  @Action({ rawError: true }) // 是否显示追剧按钮
  public SetIsShowDrama (isShowDrama: boolean) {
    this.SET_ISSHOWDRAMA(isShowDrama)
  }

  @Action({ rawError: true }) // 是否唤起付费窗口
  public SetIsPayVisible (isPayVisible: boolean) {
    this.SET_ISPAYVISIBLE(isPayVisible)
  }

  @Action({ rawError: true }) // 是否显示章节列表
  public SetIsCatalogPopupVisible (isCatalogPopupVisible: boolean) {
    this.SET_ISCATALOGPOPUPVISIBLE(isCatalogPopupVisible)
  }
}

export const ChaptersModule = getModule(Chapters)
