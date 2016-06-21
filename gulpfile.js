// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    connect = require('gulp-connect-php'),
    lib = require('bower-files')(),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps');

// Bower files
gulp.task('bower-files', function () {
  gulp.src(lib.ext('js').files)
    .pipe(concat('bower-scripts.js'))
    .pipe(gulp.dest('assets/scripts'))
    .pipe(notify({ message: 'Bower scripts complete' }));

  gulp.src(lib.ext('css').files)
    .pipe(concat('bower-styles.css'))
    .pipe(gulp.dest('assets/styles/css'))
    .pipe(notify({ message: 'Bower styles complete' }));
});

// Sass
gulp.task('sass', function () {
  return gulp.src('assets/styles/sass/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('assets/styles/css'))
      .pipe(notify({ message: 'Sass task complete' }));
});

// Styles
gulp.task('styles', function() {
  return gulp.src('assets/styles/css/**/*.css')
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Styles minified
gulp.task('styles-minified', function() {
  return gulp.src('assets/styles/css/**/*.css')
    .pipe(concat('style.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('assets/scripts/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean
gulp.task('clean', function() {
  return del(['styles', 'scripts']);
});

// Default task
gulp.task('default', ['clean', 'bower-files', 'sass'], function() {
  gulp.start('styles-minified', 'scripts');
});

// Watch
gulp.task('watch', function() {
  gulp.watch('assets/styles/sass/**/*.scss', ['sass']);
  gulp.watch('assets/styles/css/*.css', ['styles']);
  gulp.watch('assets/scripts/**/*.js', ['scripts']);
  livereload.listen();
});

// Serve
gulp.task('serve', ['watch'], function() {
  connect.server({}, function (){
    browserSync({
      open: 'local',
      proxy: '127.0.0.1:8000',
      files: [
        '**/*.php',
        '**/*.css',
        '**/*.js'
      ]
    });
  });
});