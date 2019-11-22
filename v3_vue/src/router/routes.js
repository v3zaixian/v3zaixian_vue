import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Comment from '../pages/Comment/Comment'


export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/comment',
    component:Comment
  },
  {
    path: '/',
    redirect: '/comment'
  }
]