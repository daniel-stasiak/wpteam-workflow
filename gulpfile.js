/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Load plugins ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    connect = require('gulp-connect-php'),
    lib = require('bower-files')(),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin');


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Operations ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ Bower scripts ~~~~~~~~~~ */

    gulp.task('bower-scripts', function () {
        return gulp.src(lib.ext('js').files)
            .pipe(concat('bower-scripts.js'))
            .pipe(gulp.dest('assets/scripts'))
            .pipe(notify({ message: 'Bower scripts completed' }));
    });


    /* ~~~~~~~~~~ Bower styles ~~~~~~~~~~ */

    gulp.task('bower-styles', function () {
        return gulp.src(lib.ext('css').files)
            .pipe(concat('bower-styles.css'))
            .pipe(gulp.dest('assets/styles/css'))
            .pipe(notify({ message: 'Bower styles completed' }));
    });


    /* ~~~~~~~~~~ Sass compiliation ~~~~~~~~~~ */

    gulp.task('sass', function () {
        return gulp.src('assets/styles/sass/style.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('assets/styles/css'));
    });


    /* ~~~~~~~~~~ Styles concat ~~~~~~~~~~ */

    gulp.task('styles', function() {
        return gulp.src('assets/styles/css/**/*.css')
            .pipe(sourcemaps.init())
            .pipe(concat('style.min.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('styles/'))
            .pipe(notify({ message: 'Styles completed' }));
    });


    /* ~~~~~~~~~~ Styles concat and minify ~~~~~~~~~~ */

    gulp.task('styles-minified', function() {
        return gulp.src('assets/styles/css/**/*.css')
            .pipe(sourcemaps.init())
            .pipe(concat('style.min.css'))
            .pipe(sourcemaps.write())
            .pipe(cssnano())
            .pipe(gulp.dest('styles/'))
            .pipe(notify({ message: 'Minified styles completed' }));
    });


    /* ~~~~~~~~~~ Scripts validation ~~~~~~~~~~ */

    gulp.task('scripts-validation', function() {
        return gulp.src('assets/scripts/main.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });


    /* ~~~~~~~~~~ Scripts concat and minify ~~~~~~~~~~ */

    gulp.task('scripts', function() {
        return gulp.src('assets/scripts/**/*.js')
            .pipe(concat('scripts.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('scripts'))
            .pipe(notify({ message: 'Scripts completed' }));
    });


    /* ~~~~~~~~~~ Images optim ~~~~~~~~~~ */

    gulp.task('images-optim', function () {
        return gulp.src('assets/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('images'))
    });


    /* ~~~~~~~~~~ Clean styles and scripts ~~~~~~~~~~ */

    gulp.task('clean', function() {
        return del(['styles', 'scripts', 'images']);
    });


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Tasks ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ Default task ~~~~~~~~~~ */

    gulp.task('default', ['clean', 'bower-scripts', 'bower-styles', 'sass'], function() {
        gulp.start('styles-minified', 'scripts-validation', 'scripts', 'images-optim');
    });


    /* ~~~~~~~~~~ Images task ~~~~~~~~~~ */

    gulp.task('images', function() {
        del(['images']);
        gulp.start('images-optim');
    });


    /* ~~~~~~~~~~ Watch files ~~~~~~~~~~ */

    gulp.task('watch', function() {
        gulp.watch('assets/styles/sass/**/*.scss', ['sass']);
        gulp.watch('assets/styles/css/*.css', ['styles']);
        gulp.watch('assets/scripts/**/*.js', ['scripts-validation', 'scripts']);
        livereload.listen();
    });


    /* ~~~~~~~~~~ Virtual server ~~~~~~~~~~ */

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