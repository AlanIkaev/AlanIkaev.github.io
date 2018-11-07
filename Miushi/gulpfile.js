const path = require('path');

var gulp = require("gulp"),
	cssnano = require("gulp-cssnano"),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require("gulp-concat"),
	imagemin = require("gulp-imagemin"),
	rename = require("gulp-rename"),
	less = require("gulp-less"),
	sourcemaps = require("gulp-sourcemaps");

gulp.task('less', function(){
	return gulp.src([
			'blocks/header/*.less',
			'blocks/menu/*.less',
			'blocks/mobile/*.less',
			'blocks/mobile-menu/*.less',
			'blocks/slider/*.less',
			'blocks/sets/*.less',
			'blocks/sets-slider/*.less',
			'blocks/offers/*.less',
			'blocks/offers-slider/*.less',
			'blocks/pizza/*.less',
			'blocks/pizza-slider/*.less',
			'blocks/rolls/*.less',
			'blocks/rolls-slider/*.less',
			'blocks/wok/*.less',
			'blocks/wok-slider/*.less',
			'blocks/reasons/*.less',
			'blocks/reviews/*.less',
			'blocks/form/*.less',
			'blocks/about/*.less',
			'blocks/footer/*.less'
		])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('styles.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 version'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("build"))
});

/*gulp.task('css', function(){
	return gulp.src("build/css/*.css")
		.pipe(concat('styles.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 version'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest("build"));
});*/

gulp.task('icons', function(){
	return gulp.src([
			'blocks/header/icons/*.+(jpg|png|svg)',
			'blocks/menu/icons/*.+(jpg|png|svg)',
			'blocks/mobile/icons/*.+(jpg|png|svg)',
			'blocks/mobile-menu/icons/*.+(jpg|png|svg)',
			'blocks/slider/icons/*.+(jpg|png|svg)',
			'blocks/sets/icons/*.+(jpg|png|svg)',
			'blocks/sets-slider/icons/*.+(jpg|png|svg)',
			'blocks/offers/icons/*.+(jpg|png|svg)',
			'blocks/offers-slider/icons/*.+(jpg|png|svg)',
			'blocks/pizza/icons/*.+(jpg|png|svg)',
			'blocks/pizza-slider/icons/*.+(jpg|png|svg)',
			'blocks/rolls/icons/*.+(jpg|png|svg)',
			'blocks/rolls-slider/icons/*.+(jpg|png|svg)',
			'blocks/wok/icons/*.+(jpg|png|svg)',
			'blocks/wok-slider/icons/*.+(jpg|png|svg)',
			'blocks/reasons/icons/*.+(jpg|png|svg)',
			'blocks/reviews/icons/*.+(jpg|png|svg)',
			'blocks/form/icons/*.+(jpg|png|svg)',
			'blocks/about/icons/*.+(jpg|png|svg)',
			'blocks/footer/icons/*.+(jpg|png|svg)'			
		])
		.pipe(gulp.dest("build/icons"));
});

gulp.task('img', function(){
	return gulp.src([
			'blocks/header/img/*.+(jpg|png)',
			'blocks/menu/img/*.+(jpg|png)',
			'blocks/mobile/img/*.+(jpg|png)',
			'blocks/mobile-menu/img/*.+(jpg|png)',
			'blocks/slider/img/*.+(jpg|png)',
			'blocks/sets/img/*.+(jpg|png)',
			'blocks/sets-slider/img/*.+(jpg|png)',
			'blocks/offers/img/*.+(jpg|png)',
			'blocks/offers-slider/img/*.+(jpg|png)',
			'blocks/pizza/img/*.+(jpg|png)',
			'blocks/pizza-slider/img/*.+(jpg|png)',
			'blocks/rolls/img/*.+(jpg|png)',
			'blocks/rolls-slider/img/*.+(jpg|png)',
			'blocks/wok/img/*.+(jpg|png)',
			'blocks/wok-slider/img/*.+(jpg|png)',
			'blocks/reasons/img/*.+(jpg|png)',
			'blocks/reviews/img/*.+(jpg|png)',
			'blocks/form/img/*.+(jpg|png)',
			'blocks/about/img/*.+(jpg|png)',
			'global-img/*.+(jpg|png)'
		])
		.pipe(gulp.dest("build/img"));
});

gulp.task('watch', function(){
	gulp.watch('blocks/*/*.less', ['less']);
	gulp.watch('blocks/*/img/*.(jpg|png)', ['img']);
	gulp.watch('blocks/*/icons/*.(jpg|png|svg)', ['icons']);
});

gulp.task('default', ["less","icons","img"]);
