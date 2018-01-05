const { compile } = require("handlebars");
const { readFileAsync, writeFileAsync, logInfo, getLastCommitHash } = require("./helpers/node");
const { DIRS } = require("./buildConstants");

readFileAsync("src/index.hbs")
    .then(data => {
        const template = compile(data);
        const version = getLastCommitHash();
        return template({ version });
    })
    .then((html) => writeFileAsync(`${DIRS.output}/index.html`, html))
    .then(() => logInfo("template was built"));