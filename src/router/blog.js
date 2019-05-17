import home from '../view/blog/home/Home.vue';
import Categories from '../view/blog/Categories/Categories.vue';

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '*', // 其他没有的页面都重定向到 home页面去
    redirect: '/home'
  }
]

export default routes