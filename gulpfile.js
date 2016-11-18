var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require("browser-sync").create();

// configuration
var paths = {
    allScripts: [
        'developer/js/*.js',
        'developer/js/**/*.js'
    ],
    toreload: [
        '*.html',
        'assets/js/template.js',
        'assets/css/theme.css'
    ],
    stylesheet: [
        'developer/sass/*.scss',
        'developer/sass/**/*.scss'
    ],
    stylesheettocompile: [
        'developer/sass/template.scss'
    ]
};
// define tasks here
gulp.task('lint', function() {
    return gulp.src(paths.allScripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(concat('template.js'))
        .pipe(gulp.dest('assets/js'));
});

// LINTER SCSS
gulp.task('scss-lint', function() {
  return gulp.src(paths.stylesheet)
    .pipe(scsslint());
});

// COMPILE CSS from SCSS and minify

gulp.task('sass', function () {
  return gulp.src('developer/sass/template.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ basename: 'theme' }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "ads.localhost"
    });
});

// watch for changes on js code
gulp.task('watch', function() {
    browserSync.init({
        proxy: "ads.localhost"
    });

    gulp.watch(paths.allScripts, ['lint']);
    gulp.watch(paths.stylesheet, ['scss-lint']);
    gulp.watch(paths.stylesheet, ['sass']);

    gulp.watch(paths.toreload).on('change', browserSync.reload);
});
