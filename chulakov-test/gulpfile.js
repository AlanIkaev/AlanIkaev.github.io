"use strict";

var gulp = require('gulp4');
var less = require('gulp-less');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require("autoprefixer");

gulp.task('build',function(){
	return gulp.src("blocks/**/*.less")
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(concat('all.css'))
		.pipe(postcss([
      			autoprefixer({browsers: [
        			"last 3 version"
      				]})
    			]))
		.pipe(gulp.dest('public'))
})