import ajax from './ajax'
// 首页分类数据
export const getClassify = () => ajax({
  url: `/fenlei`
})

// 推荐的榜单数据
export const getReconmend = () => ajax({
  url: `/tuijian/bangdan`
})

// 首页详情信息
export const getDetail = () => ajax({
  url: `/shouye`
})

// 首页各组件图片信息
export const getNav = () => ajax({
  url: `/navData`
})

// 首页分信息
export const getbookfenlei = () => ajax({
  url: `/books-type`
})

// 发送短信验证码
export const sendCode = (phone) => ajax({
  url:'/sendcode',
  params:{
    phone
  }
})

/* 短信验证码登陆 */
export const loginWithPhone = (phone,code) => ajax({
  url:'/login_sms',
  method:'POST',
  data: {
    phone,
    code
  },
})

// 用户名密码登陆
export const loginWithPassword = (name,pwd) => ajax({
  url:'/login_pwd',
  method:'POST',
  data: {
    name,
    pwd,
  },
})