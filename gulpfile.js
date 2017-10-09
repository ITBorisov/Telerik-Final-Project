const gulp = require("gulp");
var gulpsync = require('gulp-sync')(gulp);
const eslint = require('gulp-eslint');
const csslint = require('gulp-csslint');
const del = require('del');
const babel = require('gulp-babel');
var cssMin = require('gulp-css');
const uglify = require('gulp-uglify');
var smushit = require('gulp-smushit');



gulp.task("copy:html", () => {
    return gulp.src("public/**/*.html")
        .pipe(gulp.dest("build"));
});

gulp.task("copy:handlebars", () => {
    return gulp.src("public/**/*.handlebars")
        .pipe(gulp.dest("build/templates"));
});


gulp.task('lint:js', () => {
    gulp
        .src(["public/**/*.js", '!node_modules/**'])
        .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
});

gulp.task('lint:css', function() {
  gulp.src('public/**/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('del', () =>{
    return del('build');
});

gulp.task('compile:js', () =>
    gulp.src('public/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(
            uglify()
        )
        .pipe(gulp.dest('build'))
);

gulp.task('compile:css', function(){
  return gulp.src('public/**/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('build/'));
});

gulp.task('smushit', function () {
	return gulp.src('public/**/*.{jpg,png}')
		.pipe(smushit())
		.pipe(gulp.dest('build/'));
});


gulp.task('copy', gulpsync.sync(['copy:html', 'copy:handlebars']));
gulp.task('compile', ['compile:js','compile:css','smushit']);
gulp.task('lint', ['lint:js', 'lint:css']);
gulp.task('build', gulpsync.sync(['del', 'copy', 'lint', 'compile']));