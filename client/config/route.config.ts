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
    component: '@/pages/apps/AppLoginEnter/LoginEnter',
  },
  {
    path: '/singin',
    component: '@/pages/apps/AppSingIn/singIn',
  },

  { path: '/creater' },
  { path: '/', exact: true, redirect: '/home' },
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      // { path: '/', component: '@/pages/apps/AppIndexPage/index' },
      {
        path: '/home',
        component: '@/pages/apps/AppIndexPage/index',
        routes: [
          {
            path: '/home/recommend',
            exact: true,
            component: '@/pages/apps/AppIndexPage/Tabs/Recommend',
          },
          { path: '/home/nowplaying', component: '@/pages/apps/AppIndexPage/Tabs/Nowplaying' },
          { path: '/home/topsearch', component: '@/pages/apps/AppIndexPage/Tabs/TopSearch' },
        ],
      },
      { path: '/study', component: '@/pages/apps/AppStudyPage' },
      { path: '/news', component: '@/pages/apps/AppNewsPage' },
      { path: '/bbs', component: '@/pages/apps/AppBbsPage' },
      { path: '/app', component: '@/pages/apps/AppPage' },
      { path: '/plug', component: '@/pages/apps/AppPlugPage' },
      { component: '@/pages/NotFound', redirect: '/home' },
    ],
  },
  // { component: '@/pages/NotFound' },
  // {
  //   component: '@/layouts/header',
  //   routes: [
  //     { path: '/', exact: true, redirect: '/index/recommend' },
  //     { path: '/', component: '@/pages/index' },
  //     {
  //       path: '/index',
  //       exact: false,
  //       component: '@/pages/apps/AppIndexPage/index',
  //       routes: [
  //         { path: '/index/recommend', component: '@/pages/apps/AppIndexPage/Tabs/Recommend' },
  //         { path: '/index/nowplaying', component: '@/pages/apps/AppIndexPage/Tabs/Nowplaying' },
  //         { path: '/index/topsearch', component: '@/pages/apps/AppIndexPage/Tabs/TopSearch' },
  //       ],
  //     },
  //     { path: '/study', component: '@/pages/apps/AppStudyPage' },
  //     { path: '/news', component: '@/pages/apps/AppNewsPage' },
  //     { path: '/bbs', component: '@/pages/apps/AppBbsPage' },
  //     { path: '/app', component: '@/pages/apps/AppPage' },
  //     { path: '/plug', component: '@/pages/apps/AppPlugPage' },
  //     { component: '@/pages/NotFound', exact: true },
  //   ],
  // },
];
export { routes };
