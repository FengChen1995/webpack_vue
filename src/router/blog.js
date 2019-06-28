import home from '../view/blog/home/Home.vue'
import categories from '../view/blog/categories/Categories.vue'
import article from '../view/blog/article/Article.vue'
const routes = [
  {
    path: '*', // 其他没有的页面都重定向到 home页面去
    redirect: '/home'
  },
  // 主页
  {
    name: 'home',
    path: '/home',
    component: home
  },
  // 分类
  {
    name: 'categories',
    path: '/categories',
    component: categories
  },
  // 文章页面
  {
    name: 'article',
    path: '/article',
    component: article
  }
]

export default routes
