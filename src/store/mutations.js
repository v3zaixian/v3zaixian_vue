import {
  SAVE_CLASSIFYDATA,
  SAVE_RECONMENDDATA,
  SAVE_DETAILS,
  SAVE_NAVS,
  SAVE_BOOKFENLEI,
  SAVE_TOKEN,
  SAVE_USER,
  LOGOUT
} from './mutation-type'



export default {
  [SAVE_CLASSIFYDATA](state, {classifyData}){
    
    state.classifyData = classifyData
  },
  [SAVE_NAVS](state, {navs}){
    state.navs = navs
  },
  [SAVE_RECONMENDDATA](state, {reconmendData}){
    state.reconmendData = reconmendData
  },
  [SAVE_DETAILS](state, {details}){
    state.details = details
  },
  [SAVE_BOOKFENLEI](state, {bookfenlei}){
    state.bookfenlei = bookfenlei
  },
  // 同步保存token值
  [SAVE_TOKEN](state, {token}){
    // 将token保存到内存中
    localStorage.setItem('token_key', token)
    state.token = token
  },

  // 同步保存用户信息
  [SAVE_USER](state, {user}){
    state.user = user
  },

  // 退出登录
  [LOGOUT](state){
    state.user = {}
    state.token = ''
    localStorage.removeItem('token_key')
  },
}
