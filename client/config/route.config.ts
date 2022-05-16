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
    path: '/home',
    component: '@/pages/apps/AppPageHeader',
    routes: [{ path: '/home', exact: true, component: '@/pages/apps/AppHomePage' }],
  },
];
export { routes };
