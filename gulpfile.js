var gulp         = require('gulp'),
		browserSync  = require('browser-sync').create(),
		reload       = browserSync.reload,
		sass         = require('gulp-sass'),
		plumber      = require('gulp-plumber'),
		autoprefixer = require('autoprefixer-core'),
		postcss      = require('gulp-postcss'),
		concat       = require('gulp-concat'),
		imagemin     = require('gulp-imagemin'),
		rename       = require('gulp-rename'),
		csso         = require('gulp-csso'),
		uglify       = require('gulp-uglify');

gulp.task('default', ['server', 'build']);

gulp.task('server', function() {
	browserSync.init({
		server: './'
	})
});

gulp.task('build', ['style']);

gulp.task('style', function() {
	gulp.src('sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
	  .pipe(postcss([autoprefixer]))
		.pipe(gulp.dest("css"))
		.pipe(reload({
			stream: true
		}))
});

gulp.watch('sass/**/*.{scss,sass}', ['style']);
gulp.watch('*.html').on("change", reload);

gulp.task('public', ['fonts', 'publicCss', 'publicJs', 'publicHtml']); 

gulp.task('image', function() {
	gulp.src('img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/img'));
});

gulp.task('fonts', function() {
	gulp.src('fonts/**/*')
		.pipe(gulp.dest('public/fonts'));
});

gulp.task('publicCss', function() {
	gulp.src('css/**/*.css')
		.pipe(concat('style.css'))
		.pipe(csso())
		.pipe(gulp.dest('public/css'));
});

gulp.task('publicJs', function() {
	gulp.src('js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('publicHtml', function() {
	gulp.src('*.html')
		.pipe(gulp.dest('public'));
});