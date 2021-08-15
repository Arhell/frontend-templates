const {src, dest} = require("gulp");
const webpack = require("webpack-stream");
const rename = require("gulp-rename");
const browserSync  = require('browser-sync')

module.exports = function scripts() {
  return src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(webpack({
      mode: 'production',
      performance: { hints: false },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/env'],
              plugins: ['babel-plugin-root-import']
            }
          }
        ]
      }
    })).on('error', function handleError() {
      this.emit('end')
    })
    .pipe(rename('js.min.js'))
    .pipe(dest('src/js'))
    .pipe(browserSync.stream())
}