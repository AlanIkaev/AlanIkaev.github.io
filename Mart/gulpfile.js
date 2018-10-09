"use strict";

const gulp = require("gulp4");
const less = require("gulp-less");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");

gulp.task("less",function(){
	return gulp.src('blocks/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(concat("all.css"))
		.pipe(gulp.dest('public'));
});

gulp.task("img", function(){
	return gulp.src('blocks/{about,best-sellers,contact,discount,featured-products,latest-news,menu-section,new-collection,newsletter,partners,reviews,slider,top-header}/img/*.*', {base: 'blocks/{about,best-sellers,contact,discount,featured-products,latest-news,menu-section,new-collection,newsletter,partners,reviews,slider,top-header}/img/'})
		.pipe(gulp.dest('./public/img'));
})

gulp.task('clean', function(){
	return del('public');
});

gulp.task('build', gulp.series('clean','less'));