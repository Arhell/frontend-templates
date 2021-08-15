const { parallel, series } = require('gulp')

// Tasks
const browserSync = require("./tasks/browsersync")
const buildCopy = require("./tasks/buildcopy")
const buildHtml = require("./tasks/buildhtml")
const cleanDist = require("./tasks/cleandist")
const images = require("./tasks/images")
const scripts = require("./tasks/scripts")
const styles = require("./tasks/styles")
const serve = require("./tasks/serve")

exports.build   = series(cleanDist, scripts, styles, images, buildCopy, buildHtml)
exports.default = series(scripts, styles, images, parallel(browserSync, serve))