
var c = require('../gulpfile.config');
var concat = require('gulp-concat');
var config = new c();var ts = require('gulp-typescript');
var gulp = require('gulp');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:examples', function() {

    var result = gulp.src(config.examplesTSSrc)
        //.pipe(sourcemaps.init())
        .pipe(ts(config.examplesTSConfig));

    return result.js
            //.pipe(sourcemaps.write())
            .pipe(gulp.dest(config.examplesDir));
});

gulp.task('build:dist', function() {

    var result = gulp.src(config.tsSrc)
        .pipe(ts(config.tsConfig));

    return merge([
        result.dts
            .pipe(concat(config.dtsOut))
            .pipe(gulp.dest(config.dist)),
        result.js
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.dist))
    ]);
});