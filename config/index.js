"use strict"

const path = require("path")

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: "static",
        assetsPublicPath: "",
        proxyTable: {
            "/api": {
                changeOrigin: true,
                target: "http://localhost:8087"
            }
        },

        // Various Dev Server settings
        host: "localhost", // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // https://webpack.js.org/configuration/devtool/#development
        devtool: "cheap-module-eval-source-map",

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, "../dist/index.html"),

        // Paths
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "static",
        assetsPublicPath: "",

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: "#source-map",

        productionGzip: true,
        productionGzipExtensions: ["js", "css"],

        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
