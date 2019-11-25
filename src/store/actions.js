import {
  getNav,
  getClassify,
  getReconmend,
  getDetail,
  getbookfenlei,
  
} from '../api'
import {
  SAVE_CLASSIFYDATA,
  SAVE_RECONMENDDATA,
  SAVE_DETAILS,
  SAVE_NAVS,
  SAVE_BOOKFENLEI,
  //SAVE_TOKEN,
  SAVE_USER
} from "./mutation-type";



export default {
  async getClassifyAction({commit}){
    //1. 发送请求获取数据
    let result = await getClassify()
    
    commit(SAVE_CLASSIFYDATA, {classifyData: result})
  },
  async getReconmendAction({commit}){
    let result = await getReconmend()
    commit(SAVE_RECONMENDDATA, {reconmendData: result})
  },
  async getDetailAction({commit, state}){
    let result = await getDetail()
    commit(SAVE_DETAILS, {details: result})
  },
  async getNavAction({commit}){
    let result = await getNav()
    commit(SAVE_NAVS, {navs: result})
  },
  async getBooksFenleiAction({commit}){
    let result = await getbookfenlei()
    // console.log(result)
    commit(SAVE_BOOKFENLEI, {bookfenlei: result})
  },

  // 异步获取更新用户名、token
  getUserAction({commit}, {user}){
    commit(SAVE_TOKEN,{token:user.token})
    // 将user中的token删除
    delete user.token
    commit(SAVE_USER,{user})
  },

  // 七天自动登录：获取用户信息
  /* async autoLoginAction({commit},){
    let result = await autoLogin()
    if (result.code === 0) {
      commit(SAVE_USER,{user:result.data})
    }
  } */
}
