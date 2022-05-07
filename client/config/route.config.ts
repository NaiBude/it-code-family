interface routerConfig {
  [propName: string]: string;
  component: string;
  path?: string;
}
const routes: routerConfig[] = [
  { path: '/', component: '@/pages/index' },
  { path: '/home', component: '@/pages/App/home' },
  { component: '@/pages/App/home' },
];
export { routes };
