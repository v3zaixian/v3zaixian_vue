import {
  getNav,
  getClassify,
  getReconmend,
  getDetail,
  getbookfenlei
} from '../api'
import {
  SAVE_CLASSIFYDATA,
  SAVE_RECONMENDDATA,
  SAVE_DETAILS,
  SAVE_NAVS,
  SAVE_BOOKFENLEI
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
    console.log(result)
    commit(SAVE_BOOKFENLEI, {bookfenlei: result})
  },
}
