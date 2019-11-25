import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Comment from '../pages/Comment/Comment'
import Concern from '../pages/Comment/Concern/Concer.vue'
import Recommend from '../pages/Comment/Recommend/Recommend.vue'
import Dub from '../pages/Comment/Dub/Dub.vue'
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Hear from '../pages/Hear/Hear.vue'
import HomeDatil from '../pages/HomeDatil/HomeDatil.vue'


export default [
  {
    path:'/login',
    component:Login
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooterGuide: true,
      isShowHeaderGuide:true
    },
  },
  {
    path:'/home/datil',
    name:'datil',
    component:HomeDatil
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowHeaderGuide:true
    }
  },
  {
    path: '/hear',
    component: Hear,
    meta: {
      isShowFooterGuide: true,
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: {
      isShowFooterGuide: true,
    }
  },
  {
    path:'/comment',
    component:Comment,
    meta: {
      isShowFooterGuide: true,
    },
    children:[
      {
        path:'/comment/concern',
        component:Concern, 
        meta: {
          isShowFooterGuide: true,
        }
      },
      {
        path:'/comment/recommend',
        component:Recommend, 
        meta: {
          isShowFooterGuide: true,
        }
      },
      {
        path:'/comment/dub',
        component:Dub, 
        meta: {
          isShowFooterGuide: true,
        }
      },
    ]
    
  },
  {
    path: '/',
    redirect: '/home'
  }
]