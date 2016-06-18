var c = require('../gulpfile.config');
var concat = require('gulp-concat');
var config = new c();
var connect = require('gulp-connect');
var gulp = require('gulp');
var utils = require('gulp-utils');

gulp.task('examples', function() {
    connect.server({
        root: config.directories.examples//,
        //middleware: function(connect, opt) {
            //return [
                // serve contents of the dist folder
                //utils.mount(connect, './')
            //]
        //}
    });
});