const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack');
const postcss = require('gulp-postcss');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const config = {
  input: {
    js: 'js/main.js', // this is needed but not used. @see webpack.config.js
    css: 'sass/main.scss',
  },
  output: {
    js: 'dist/js/',
    css: 'dist/css/',
  },
  watch: {
    js: 'js/**/*.js',
    css: 'sass/**/*.s+(a|c)ss',
  },
  sourcemaps: './sourcemaps',
};

const js = () => {
  return gulp
    .src(config.input.js)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.output.js));
}

const css = () => {
  return gulp
    .src(config.input.css)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules'],
    }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(sourcemaps.write(config.sourcemaps))
    .pipe(gulp.dest(config.output.css));
}

const watchCSS = () => {
  return gulp.watch(config.watch.css, gulp.series(css));
}

const watchJS = () => {
  return gulp.watch(config.watch.js, gulp.series(js));
}

exports.js = gulp.series(js);
exports.sass = gulp.series(css);
exports.css = gulp.parallel(css);
exports.watch = gulp.parallel(css, js, watchCSS, watchJS);

exports.default = gulp.parallel(css, js);
