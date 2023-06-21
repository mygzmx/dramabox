import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { IPlayerState } from '@/store/modules/index.model'
import { IParentInfo, ITheaterItem } from '@/types/player.interface'

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
