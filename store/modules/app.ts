import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { IAppState } from '@/store/modules/index.model'
import { IParentInfo } from '@/types/player.interface'

@Module({
  dynamic: true,
  store,
  name: 'app'
})
class App extends VuexModule implements IAppState {
  public recommendData = {} as IParentInfo

}

export const AppModule = getModule(App)
