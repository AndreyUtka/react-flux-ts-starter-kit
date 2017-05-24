const replace = require("rollup-plugin-replace");
const sourcemaps = require('rollup-plugin-sourcemaps');
const config = require("./rollup.helper");
const resolve = require('rollup-plugin-node-resolve');
const buildConstants = require("./build-constants");

export default {
    entry: `${buildConstants.tmpOut}/index.js`,
    dest: `${buildConstants.out}/bundle.js`,
    format: "iife",
    sourceMap: true,
    globals: config.globals,
    external: config.external,
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        resolve({ jsnext: true, modulesOnly: true }),
        sourcemaps()
    ]
}
