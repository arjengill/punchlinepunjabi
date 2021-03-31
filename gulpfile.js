const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const svgmin = require("gulp-svgmin");
const { src, series, parallel, dest, watch } = require("gulp");

const jsPath = "src/assets/js/*.js";
const jsPathLyrics = "src/assets/js/lyricsdictionary/*.js";
const cssPath = "src/assets/css/**/*.css";
const htmlPath = "src/assets/*.html";

function copyHtml() {
  return src("src/assets/*.html").pipe(gulp.dest("dist"));
}

function imgTask() {
  return src("src/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
}

function svgTask() {
  return src("src/assets/svg icons/*")
    .pipe(svgmin())
    .pipe(gulp.dest("dist/svg icons"));
}

function fontTask() {
  return src("src/assets/fonts/**/*").pipe(gulp.dest("dist/fonts/"));
}

function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/js"));
}

function dictionaryJS() {
  return src(jsPathLyrics)
    .pipe(concat("lyrics.js"))
    .pipe(terser())
    .pipe(dest("dist/js"));
}

function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat("style.css"))
    .pipe(postcss([autoprefixer({ grid: false }), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"));
}

function watchTask() {
  watch(
    [cssPath, jsPath, htmlPath],
    { interval: 1000 },
    parallel(cssTask, jsTask, copyHtml)
  );
}

exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.cssTask = cssTask;
exports.copyHtml = copyHtml;
exports.watchTask = watchTask;
exports.default = parallel(
  copyHtml,
  imgTask,
  jsTask,
  dictionaryJS,
  cssTask,
  svgTask,
  fontTask
);
