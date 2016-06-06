var c = require('../gulpfile.config');
var concat = require('gulp-concat');
var config = new c();
var connect = require('gulp-connect');
var gulp = require('gulp');
var utils = require('gulp-utils');

gulp.task('test', function() {
    connect.server({
        root: './test',
        middleware: function(connect, opt) {
            return [
                // serve contents of the dist folder
                utils.mount(connect, './')
            ]
        }
    });
});