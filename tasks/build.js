
var c = require('../gulpfile.config');
var concat = require('gulp-concat');
var config = new c();var ts = require('gulp-typescript');
var gulp = require('gulp');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:dev', function() {

    var result = gulp.src([
        './src/*.ts',
        './src/**/*.ts',
        '!./lib/**/*.ts',
        './typings/*.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(ts({
            //sortOutput: true,
            module: 'amd',
            target: 'es5',
            declaration: true,
            noExternalResolve: true
        }));

    return merge([
        result.dts
            .pipe(concat(config.dtsOut))
            .pipe(gulp.dest(config.build)),
        result.js
            .pipe(concat(config.jsOut))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.build))
    ]);
});

gulp.task('build:test', function() {

    var result = gulp.src([
        './test/*.ts',
        './.build/*.d.ts',
        './typings/*.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(ts({
            sortOutput: true,
            module: 'amd',
            target: 'es5'
        }));

    return result.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./test'));
});

gulp.task('build:dist', function() {

    var result = gulp.src([
            './src/*.ts',
            './src/**/*.ts',
            '!./lib/**/*.ts',
            './typings/*.ts'
        ])
        .pipe(ts({
            sortOutput: true,
            module: 'amd',
            target: 'es5',
            declaration: true
        }));

    return merge([
        result.dts
            .pipe(concat(config.dtsOut))
            .pipe(gulp.dest(config.dist)),
        result.js
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.dist))
    ]);
});