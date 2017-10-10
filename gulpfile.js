var gulp 		= require("gulp");
var sass 		= require("gulp-sass");
var htmlmin 	= require("gulp-htmlmin");
var notify 		= require("gulp-notify");
var concat 		= require("gulp-concat");
var uglify 		= require("gulp-uglify");
var browserSync = require("browser-sync").create();
var del 		= require("del");
var jshint		= require("gulp-jshint");
var cssmin		= require("gulp-cssmin");
var runSequence = require("run-sequence");
var imagemin	= require("gulp-imagemin");

/* Tasks cached */
gulp.task("cache:css", function() {
	del("./dist/css/style.css")
});

gulp.task("cache:js", function() {
	del("./dist/js/app.js")
});

gulp.task("cache:html", function(){
	del(".dist/index.html")
});

/*Task minfy PNG, JPEG, GIF and SVG images*/
gulp.task("imagemin", function(){
	return gulp.src("src/img/**/*")
			   .pipe(imagemin())
			   .pipe(gulp.dest("dist/img"));
});


/* Task compile scss to css */
gulp.task("sass", ['cache:css'], function() {
	return gulp.src("./src/scss/style.scss")
				.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(gulp.dest("./dist/css"))
				.pipe(browserSync.stream());
});


/* Task minify html */
gulp.task("html", ['cache:html'], function() {
	return gulp.src("./src/index.html")
				.pipe(htmlmin({collapseWhitespace: true}))
				.pipe(gulp.dest("./dist"))
				.pipe(browserSync.stream());
});

/*Task jshint js*/
gulp.task("jshint", function(){
	return gulp.src("./src/js/app.js")
				.pipe(jshint())
				.pipe(jshint.reporter('default'));
});

/* Task minify js */
gulp.task("js", ['cache:js'], function() {
	return gulp.src("./src/js/app.js")
				.pipe(uglify())
				.pipe(gulp.dest("./dist/js"))
				.pipe(browserSync.stream());
});

/* Task concat js */
gulp.task("concat-js", function() {
	return gulp.src([
					'./src/components/jquery/dist/jquery.js',
					'./src/components/tether/dist/js/tether.js',
					'./src/components/bootstrap/dist/js/bootstrap.js'
				])
				.pipe(concat("main.js"))
				.pipe(uglify())
				.pipe(gulp.dest("./dist/js"))
});

/*Task move fonts to font awesome*/
gulp.task("move-fonts", function(){
	return gulp.src('./src/components/font-awesome/fonts/**')
		   .pipe(gulp.dest("./dist/fonts"))
});

/* Task server local */
gulp.task("server", function() {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});

	/* Watch */
	gulp.watch("./src/scss/**/*.scss", ['sass']);
	gulp.watch("./src/components/bootstrap/scss/**/*.scss", ['sass']);
	gulp.watch("./src/js/**/*.js", ['js']);
	gulp.watch("./src/index.html", ['html']);
});

gulp.task("default", function(cb){
	return runSequence(['imagemin', 'sass', 'html', 'jshint', 'js', 'concat-js', 'move-fonts', 'server'], cb)
});