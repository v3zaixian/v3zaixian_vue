import {
  SAVE_CLASSIFYDATA,
  SAVE_RECONMENDDATA,
  SAVE_DETAILS,
  SAVE_NAVS,
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
}
