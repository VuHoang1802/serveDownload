const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')
const app = express();
app.use(cors());
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://103.78.0.39:3000/',
    changeOrigin: true,
    pathRewrite: {
        "^/api": "" // strip "/api" from the URL
      },
  })
);
module.exports = app;
