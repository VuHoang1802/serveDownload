const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')
const app = express();
app.use(cors());
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://h.aaaapp.cn:2099/',
    changeOrigin: true,
    pathRewrite: {
        "^/api": "" // strip "/api" from the URL
      },
  })
);
module.exports = app;