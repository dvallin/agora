"use strict"
const config = require("./")
const cssLoaders = require("./cssLoaders")

const isProduction = process.env.NODE_ENV === "production"
const sourceMapEnabled = isProduction ?
    config.build.productionSourceMap :
    config.dev.cssSourceMap

module.exports = {
    loaders: {
        ...cssLoaders.rawLoaders({
            sourceMap: sourceMapEnabled,
            extract: isProduction
        }),
        ts: "ts-loader!tslint-loader!formatter"
    },
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ["src", "poster"],
        source: "src",
        img: "src",
        image: "xlink:href"
    }
}
