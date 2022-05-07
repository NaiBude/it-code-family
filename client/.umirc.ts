import { defineConfig } from 'umi';
import { routes } from './config/route.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [...routes],
  fastRefresh: {},
  dva: {
    immer: true,
  },
});
