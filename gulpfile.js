// -*- coding: utf-8 -*-
var gulp = require("gulp");
var gutil = require("gulp-util");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task('hello', function() {
    console.log('Hell oWorld!');
});


gulp.task('videojs', function (callback){
    return gulp.src([
        './node_modules/video.js/dist/video-js/video.dev.js',
        './node_modules/videojs-contrib-media-sources/src/videojs-media-sources.js',
        './vendor/videojs.hls.min.js'])
        .pipe(plumber())
        .pipe(concat('vendor.bundle.js'))
        .pipe(uglify('vendor.bundle.min.js'))
        .pipe(gulp.dest('static/var/'));
});

gulp.task("build", function(callback) {
    var config = Object.create(webpackConfig);
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("default", ["videojs", "build"]);
