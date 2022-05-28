import { defineConfig } from 'umi';
import { routes } from './config/route.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  styles: ['#root{height: 100%}'],
  routes: [...routes],
  fastRefresh: {},
  dva: {
    immer: true,
  },
});
