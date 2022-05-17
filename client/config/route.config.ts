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
  { path: '/', exact: true, redirect: '/home' },
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      { path: '/', exact: true, component: '@/pages/apps/AppHomePage' },
      { path: '/forum', component: '@/pages/apps/AppForumPage' },
      { path: '/ask', component: '@/pages/apps/AppForumPage' },
    ],
  },
];
export { routes };
