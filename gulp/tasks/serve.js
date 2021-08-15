const filesWatch   = 'html,htm,txt,json,md,woff2'

const { watch } = require('gulp')

const scripts = require("./scripts")
const styles = require("./styles")
const images = require("./images")
const browserSync  = require('browser-sync')

module.exports = function serve() {
  watch('src/styles/**/*', { usePolling: true }, styles)
  watch(['src/js/**/*.js', '!src/js/**/*.min.js'], { usePolling: true }, scripts)
  watch('src/images/src/**/*.{jpg,jpeg,png,webp,svg,gif}', { usePolling: true }, images)
  watch(`src/**/*.{${filesWatch}}`, { usePolling: true }).on('change', browserSync.reload)
}