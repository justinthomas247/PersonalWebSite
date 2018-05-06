var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpWebpack = require('gulp-webpack');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var del = require('del');
var webpackConfig = require('./webpack.config.js');

var paths = {
    indexjs: './index.js',
    release: './release',
    temp: './temp'
}

/**
 * deletes the previous built files in directories
 */
gulp.task('clean', function(){
    return del([paths.release+'/**/*', paths.temp+'/**/*']);
});

/**
 * gets index.js, sends webpack
 * creates new webpack based on webpack config file
 * webpack finds the index.js requirements and bundles it
 * sends the bundled file to a temp directory
 */
gulp.task('buildWebpack', ['clean'], function(){
    return gulp.src(paths.indexjs)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.temp));
});

/**
 * takes the bundled files and converts to ES5 using babel
 * creates sourcemaps for debugging
 * puts all the final files in release directory
 */
gulp.task('buildBabel', ['buildWebpack'], function(){
    return gulp.src(paths.temp+"/**/*")
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.release));
});

/**
 * default task when calling gulp
 */
gulp.task('default', ['buildBabel']);



// gulp.task('default', [clean], function(){
//     return gulp.src('webpack.config.js')
//     .pipe(gulpWebpack({}, webpack))
//     .pipe(gulp.dest('dist'));
// });