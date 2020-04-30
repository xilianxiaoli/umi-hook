import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  proxy: {
    '/api': {
      // 'target': 'http://easy-mock.com/mock/5e954d8ddfd0706c2769f37b/react',
      'target': 'http://localhost:5467',
      'changeOrigin': true,
      // 'pathRewrite': { '^/mock': '' },
    },
  },
  // mock:false
});
