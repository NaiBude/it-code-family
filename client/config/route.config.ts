interface routerConfig {
  component?: string;
  path?: string;
  exact?: boolean;
  redirect?: string;
  wrappers?: string[];
  title?: string;
  routes?: routerConfig[];
}
const routes: routerConfig[] = [
  {
    path: '/login',
    component: '@/pages/apps/AppLoginEnter/LoginEnter', //登陆页面
  },
  {
    path: '/singin',
    component: '@/pages/apps/AppSingIn/singIn', //注册页面
  },
  // { path: '/creater' },
  { path: '/', exact: true, redirect: '/home' }, //重定向主页
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      { path: '/', component: '@/pages/apps/AppCoreHomePage/index' },
      {
        path: '/home',
        component: '@/pages/apps/AppCoreHomePage/index', //首页
        routes: [
          {
            path: '/home',
            exact: true,
            component: '@/pages/apps/AppCoreHomePage/Tabs/Recommend',
          },
          { path: '/home/nowplaying', component: '@/pages/apps/AppCoreHomePage/Tabs/Nowplaying' },
          { path: '/home/topsearch', component: '@/pages/apps/AppCoreHomePage/Tabs/TopSearch' },
        ],
      },
      { path: '/study', component: '@/pages/apps/AppStudyPage' },
      { path: '/news', component: '@/pages/apps/AppNewsPage' },
      { path: '/bbs', component: '@/pages/apps/AppBbsPage' },
      { path: '/app', component: '@/pages/apps/AppPage' },
      { path: '/plug', component: '@/pages/apps/AppPlugPage' },
      {
        path: 'article',
        component: '@/pages/apps/AppArticleContentShow',
      },
      { component: '@/pages/NotFound', redirect: '/home' },
    ],
  },
];
export { routes };
