var c = require('./gulpfile.config');
var concat = require('gulp-concat');
var config = new c();
var connect = require('gulp-connect');
var gulp = require('gulp');
var merge = require('merge2');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

gulp.task('build:dev', function() {

    var tsResult = gulp.src([
            './src/*.ts',
            './src/**/*.ts',
            './test/*.ts',
            '!./lib/**/*.ts',
            './typings/*.ts'
        ])
        //.pipe(sourcemaps.init())
        .pipe(ts({
            module: 'amd',
            target: 'es5',
            out: config.out
        }));

    //return tsResult.js.pipe(concat(config.out)).pipe(sourcemaps.write('./')).pipe(gulp.dest(config.dist));
    //return tsResult.js.pipe(gulp.dest(config.dist));

    return merge([
        tsResult.dts.pipe(gulp.dest(config.dist)),
        tsResult.js.pipe(gulp.dest(config.dist))
    ]);
});

function mount(connect, dir) {
    return connect.static(path.resolve(dir));
}

gulp.task('test', function() {
    connect.server({
        root: './test',
        middleware: function(connect, opt) {
            return [
                // serve contents of the dist folder
                mount(connect, './')
            ]
        }
    });
});