var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var path = require('path');
var utils = require('gulp-utils');

gulp.task('minify', function(cb){
    Promise.all([
        utils.minify(path.join(config.dist, config.jsOut), config.dist)
    ]).then(function(){
        cb();
    });
});