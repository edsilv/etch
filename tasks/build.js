
var c = require('../gulpfile.config');
var concat = require('gulp-concat');
var config = new c();var ts = require('gulp-typescript');
var gulp = require('gulp');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:examples', function() {

    var result = gulp.src(config.typescript.examples.src)
        .pipe(sourcemaps.init())
        .pipe(ts(config.typescript.examples.config));

    return result.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.directories.examples));
});

gulp.task('build:dist', function() {

    var result = gulp.src(config.typescript.src)
        .pipe(ts(config.typescript.config));

    return merge([
        result.dts
            .pipe(concat(config.fileNames.dtsOut))
            .pipe(gulp.dest(config.directories.dist)),
        result.js
            .pipe(concat(config.fileNames.jsOut))
            .pipe(gulp.dest(config.directories.dist))
    ]);
});