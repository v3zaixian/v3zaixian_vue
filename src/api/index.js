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