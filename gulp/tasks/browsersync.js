const bssi = require("browsersync-ssi");
const browserSync  = require('browser-sync')

module.exports = function browserync() {
  browserSync.init({
    server: {
      baseDir: 'src/',
      middleware: bssi(
        {
          baseDir: 'src/',
          ext: '.html'
        }
      )
    },
    ghostMode: { clicks: false },
    notify: false,
    online: true,
  })
}