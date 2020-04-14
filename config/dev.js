module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      "proxy": {
        "/api": {
          "target": "http://localhost:9999/",
          "changeOrigin": true,
          "secure": false,
          "pathRewrite": {"^/api": ""}
        }
      }
    }
  }
};
