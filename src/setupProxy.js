const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    server: {
      proxy: {
        '/api': {
          target: 'http://162.255.87.139:5034',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
