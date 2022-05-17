const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  createProxyMiddleware({
    target: "https://cms.dev.cynfusion.net",
    toProxy: "http://localhost:8888",
    changeOrigin: true,
  })
);
app.listen(4400);
