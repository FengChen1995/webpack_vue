
const routes = [
  {
    path: '*', // 其他没有的页面都重定向到 home页面去
    redirect: '/home'
  },
  // 主页
  {
    name: 'home',
    path: '/home',
    component: () => import('../view/blog/home/Home.vue')
  },
  // 分类
  {
    name: 'categories',
    path: '/categories',
    component: () => import('../view/blog/categories/Categories.vue')
  },
  // 归档
  {
    name: 'history',
    path: '/history',
    component: () => import('../view/blog/history/History.vue')
  },
  // 关于我
  {
    name: 'chenzian',
    path: '/chenzian',
    component: () => import('../view/blog/chenzian/Chenzian.vue')
  },
  // 友链
  {
    name: 'friends',
    path: '/friends',
    component: () => import('../view/blog/friends/Friends.vue')
  },
  // 更多
  {
    name: 'more',
    path: '/more',
    component: () => import('../view/blog/more/More.vue')
  },
  // 搜索
  {
    name: 'search',
    path: '/search',
    component: () => import('../view/blog/list/List.vue'),
    meta: {
      handlstatus: 1
    }
  },
  // 文章列表
  {
    name: 'list',
    path: '/list',
    component: () => import('../view/blog/list/List.vue'),
    meta: {
      handlstatus: 2
    }
  },
  // 文章页面
  {
    name: 'article',
    path: '/article',
    component: () => import('../view/blog/article/Article.vue')
  }
]

export default routes
