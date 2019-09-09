const path = require("path");
module.exports = {
  devServer: {
    proxy: {
      "/app": {
        target: "https://m.nubia.com",
        changeOrigin: true,
        pathRewrite: {
          "^/app": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "@api": path.join(__dirname, "./src/api"),
        "@common": path.join(__dirname, "./src/common"),
        "@components": path.join(__dirname, "./src/components"),
        "@lib": path.join(__dirname, "./src/lib"),
        "@pages": path.join(__dirname, "./src/pages"),
        "@router": path.join(__dirname, "./src/router"),
        "@store": path.join(__dirname, "./src/store"),
        "@utils": path.join(__dirname, "./src/utils")
      }
    }
  }
};
