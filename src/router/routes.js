let Home  = () => import('../pages/Home/Home')
let Comment  = () => import('../pages/Comment/Comment')
let Hear  = () => import('../pages/Hear/Hear')
let Profile  = () => import('../pages/Profile/Profile')
let Category  = () => import('../pages/Category/Category')
let Details = () =>import('../pages/Details/Details')
let History = () =>import('../pages/History/History')
export default [
  // {
  //     path: '路由路径',
  //     component: 路由组件
  // }
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooterGuide: true,
      isShowHeaderGuide:true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowHeaderGuide:true
    }
  },
  {
    path: '/comment',
    component: Comment,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/hear',
    component: Hear,
    meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
      isShowFooterGuide: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/details',
    component: Details,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/history',
    component: History,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]