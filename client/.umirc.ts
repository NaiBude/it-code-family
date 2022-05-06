import { defineConfig } from 'umi';
import * as routes from './config/route.config';

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
