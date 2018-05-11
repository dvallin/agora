const formatter = require("typescript-formatter")
const typescript = require("typescript")
const loaderUtils = require("loader-utils")

module.exports = function (source, map) {
    var fileName = this.resourcePath

    this.cacheable()

    const callback = this.async()
    const options = {
        verify: true,
        replace: false,
        tsconfig: false,
        tslint: false,
        editorconfig: false,
        tsfmt: true,
    }

    formatter
        .processString(fileName, source, options)
        .then((result) => {
            const {
                error: hasError,
                message
            } = result

            let error = null
            if (hasError) {
                error = new Error(
                    message + " !!! run yarn format !!!"
                )
            }
            callback(error, source, map)
        })
        .catch(callback)
}
