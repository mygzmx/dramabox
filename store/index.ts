import { createStore, createLogger, useStore as baseUseStore, Store } from 'vuex'
import { App, InjectionKey } from 'vue'
import {
  IAppState, IChaptersState, IDeviceState, IPlayerState, IUserState
} from '@/store/modules/index.model'

export interface IStore {
  app: IAppState; // app其他信息
  device: IDeviceState;
  chapters: IChaptersState;
  user: IUserState;
  player: IPlayerState;
}

export const key: InjectionKey<Store<IStore>> = Symbol('player_pwa_hw')

const store: Store<IStore | unknown> = createStore({
  // plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [], // 在开发环境中开启logger
  strict: process.env.NODE_ENV !== 'production' // 严格模式
})

export default store

export function useStore (): Store<IStore> {
  return baseUseStore(key)
}

export function setupStore (app: App): void {
  app.use(store, key)
}

export type RootState = Store<IStore | unknown>
export type AppDispatch = ReturnType<typeof store.dispatch>
