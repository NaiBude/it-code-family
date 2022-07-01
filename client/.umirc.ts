import { defineConfig } from 'umi';
import { routes } from './config/route.config';

import { SERVER_PORT } from './config/server.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  styles: ['#root{height: 100%}'],
  routes: [...routes],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
  proxy: {
    '/api': {
      target: `http://localhost:${SERVER_PORT}`,
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
  request: {
    dataField: 'data',
  },
  // theme: {
  //   '@primary-color': '#047e1c',
  // },
});
