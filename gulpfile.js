/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Load plugins ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

var $ = require('gulp-load-plugins')(),
    argv = require('yargs').argv,
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sequence    = require('run-sequence'),
    del = require('del'),
    cssnano = require('gulp-cssnano');


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Variables ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

var PATHS = {
    sass: [
        'bower_components/css-hamburgers/_sass',
        'bower_components/font-awesome/scss',
        'bower_components/jQuery.mmenu/dist/css',
        'bower_components/select2/src/scss',
        // 'bower_components/owl.carousel/src/scss'
    ],
    javascript: [

        /* ~~~~~~~~~~ Bower Components ~~~~~~~~~~ */

        'bower_components/popper.js/index.js',
        'bower_components/tooltip.js/index.js',

        'bower_components/jquery-lazy/jquery.lazy.js',

        'bower_components/jquery.easing/js/jquery.easing.compatibility.js',
        'bower_components/jquery.easing/js/jquery.easing.js',

        'bower_components/jQuery.mmenu/dist/js/jquery.mmenu.all.min.js',
        'bower_components/jQuery.mmenu/dist/addons/fixedelements/jquery.mmenu.fixedelements.min.js',

        'bower_components/matchHeight/jquery.matchHeight.js',

        // 'bower_components/owl.carousel/dist/owl.carousel.js',

        'bower_components/retinajs/dist/retina.js',

        'bower_components/select2/dist/js/select2.js',


        /* ~~~~~~~~~~ Core scripts ~~~~~~~~~~ */

        'assets/scripts/core/bootstrap/alert.js',
        'assets/scripts/core/bootstrap/button.js',
        'assets/scripts/core/bootstrap/carousel.js',
        'assets/scripts/core/bootstrap/collapse.js',
        'assets/scripts/core/bootstrap/dropdown.js',
        'assets/scripts/core/bootstrap/modal.js',
        'assets/scripts/core/bootstrap/popover.js',
        'assets/scripts/core/bootstrap/scrollspy.js',
        'assets/scripts/core/bootstrap/tab.js',
        'assets/scripts/core/bootstrap/tooltip.js',
        'assets/scripts/core/bootstrap/util.js',


        /* ~~~~~~~~~~ Custom scripts ~~~~~~~~~~ */

        'assets/scripts/custom/*.js'
    ]
};

var isProduction = !!(argv.production);

var COMPATIBILITY = [
    'last 10 versions',
    'ie >= 9',
    'Android >= 2.3'
];


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Operations ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ Sass compiliation ~~~~~~~~~~ */

    gulp.task('sass', function () {
        return gulp.src('assets/styles/sass/style.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass({
                includePaths: PATHS.sass
            }))
            .on('error', $.notify.onError({
                message: "<%= error.message %>",
                title: "Sass Error"
            }))
            .pipe($.autoprefixer({
                browsers: COMPATIBILITY
            }))
            .pipe($.if(isProduction, cssnano()))
            .pipe($.if(!isProduction, $.sourcemaps.write('.')))
            .pipe(gulp.dest('styles/'))
            .pipe($.notify({ message: 'Styles completed' }));
    });


    /* ~~~~~~~~~~ Lint custom JS file ~~~~~~~~~~ */

    gulp.task('lint', function() {
        return gulp.src('assets/scripts/custom/custom.js')
        .pipe($.jshint())
        .pipe($.notify(function (file) {
            if (file.jshint.success) {
                return false;
            }

            var errors = file.jshint.results.map(function (data) {
                if (data.error) {
                    return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
                }
            }).join("\n");

            return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
        }));
    });


    /* ~~~~~~~~~~ Scripts concat and minify ~~~~~~~~~~ */

    gulp.task('scripts', function() {
        var uglify = $.uglify()
            .on('error', $.notify.onError({
                message: "<%= error.message %>",
                title: "Uglify JS Error"
            }));

        return gulp.src(PATHS.javascript)
            .pipe($.sourcemaps.init())
            .pipe($.concat('scripts.js', {
                newLine:'\n;'
            }))
            .pipe($.if(isProduction, uglify))
            .pipe($.if(!isProduction, $.sourcemaps.write()))
            .pipe(gulp.dest('scripts/'))
            .pipe($.notify({ message: 'Scripts completed' }));
    });


    /* ~~~~~~~~~~ Images optimization ~~~~~~~~~~ */

    gulp.task('images-optim', function () {
        return gulp.src('assets/images/**/*')
            .pipe($.imagemin())
            .pipe(gulp.dest('images/'))
    });


    /* ~~~~~~~~~~ Copy ~~~~~~~~~~ */

    gulp.task('copy', function() {

        /* ~~~~~~~~~~ Font Awesome ~~~~~~~~~~ */

        var fontAwesome = gulp.src('bower_components/font-awesome/fonts/**/*.*')
            .pipe(gulp.dest('fonts/'));
    });


    /* ~~~~~~~~~~ Clean styles, scripts, and images ~~~~~~~~~~ */

    gulp.task('clean', function() {
        return del(['styles', 'scripts', 'images-optim']);
    });


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Tasks ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ Default task ~~~~~~~~~~ */

    gulp.task('default', function(done) {
        gulp.watch('assets/styles/sass/**/*.scss', ['sass']);
        gulp.watch('assets/scripts/**/*.js', ['scripts', 'lint']);
        browserSync.reload();
        done();
    });


    /* ~~~~~~~~~~ Images task ~~~~~~~~~~ */

    gulp.task('images', function() {
        del(['images']);
        gulp.start('images-optim');
    });


    /* ~~~~~~~~~~ Watch files ~~~~~~~~~~ */

    gulp.task('build', ['clean'], function(done) {
        sequence('copy',
          ['sass', 'scripts', 'lint', 'images-optim'],
          done);
    });


    /* ~~~~~~~~~~ Virtual server ~~~~~~~~~~ */

    gulp.task('serve', ['default'], function() {
        browserSync.init({
            open: 'local',
            browser: 'firefox',
            proxy: 'localhost/project-name/',
            files: [
                '**/*.php',
                '**/*.css',
                '**/*.js'
            ]
        });
    });