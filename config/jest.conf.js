const path = require("path")

module.exports = {
    rootDir: path.resolve(__dirname, "../"),
    moduleFileExtensions: [
        "js",
        "ts",
        "json",
        "vue"
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$",
    transform: {
        "^.+\\.ts$": "<rootDir>/node_modules/ts-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    snapshotSerializers: ["<rootDir>/test/test-utils/jest-serializer.js"],
    setupFiles: ["<rootDir>/test/setup", "jest-localstorage-mock"],
    coverageDirectory: "<rootDir>/coverage",
    collectCoverageFrom: [
        "src/**/*.{js,ts,vue}",
        "!src/main.ts",
        "!**/node_modules/**"
    ]
}
