import { INetPlayerInfoRes } from '@/types/player.interface'
import Service, { BASEURL } from '@/utils/request'
import { UserModule } from '@/store/modules/user'

console.log('-----------BASEURL----------->', BASEURL)

export const netPlayerInfo = async (book_id: number): Promise<INetPlayerInfoRes> => {
  return await Service.post('/api/ks/theater/without/group/index', { parent_id: book_id, user_id: UserModule.userInfo.id })
}
/**
 * 加入书架
 * @param bookId 书籍id
 */
export const netDrama = (bookId: string) => {
  console.log('-----------WebAndDrama 加入书架-----------')
}

/**
 * 推荐书籍
 * @param bookId
 */
export const netRecommendBook = async (bookId: string): Promise<any> => {
  console.log('-----------S 推荐书籍-----------')
  return await Service.post('/asg/portal/call/413.do', { bookId })
}
