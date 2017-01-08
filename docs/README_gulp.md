# Workflow capabilities - Gulp

Our ```gulpfile.js``` is using:
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-notify](https://www.npmjs.com/package/gulp-notify)
- [gulp-livereload](https://github.com/vohof/gulp-livereload)
- [del](https://www.npmjs.com/package/del)
- [gulp-connect-php](https://www.npmjs.com/package/gulp-connect-php)
- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)
- [gulp-imagemin](https://github.com/vohof/gulp-livereload)
- [gulp-postcss](https://github.com/postcss/gulp-postcss)
- [autoprefixer](https://github.com/postcss/autoprefixer)

## Operations

### Bower scripts

This task is concating all JS files from ```bower-components/``` folder to one file called ```bower-scripts.js``` and placing it on ```assets/scripts/bower-scripts.js``` directory.

### Bower styles

This task is concating all CSS files from ```bower-components/``` folder to one file called ```bower-styles.css``` and place it on ```assets/styles/css/bower-styles.css``` directory.

### Sass

This task is compiling main Sass file from ```assets/styles/sass/style.scss``` and placing it in ```assets/styles/css```.

### Styles concat

This task is concating all CSS files from ```assets/styles/css/``` to one file called ```style.min.css```, adding source maps to this file and placing it on ```styles/style.min.css```.

### Styles concat and minify

This task is the same as above, but concated ```style.min.css``` file has got vendors in source code for old browsers, and whole file is minified.

### Scripts validation

This task is validating main JS file placed in ```assets/scripts/main.js```.

### Scripts concat and minify

This task is concating all JS files from ```assets/scripts/``` to one file called ```scripts.min.js```, minifing this file and placing it on ```scripts/scripts.min.js```.

### Images optim

This task is compressing all of JPG, PNG, SVG and GIF files from ```assets/images/``` and placing compressed images in ```images/``` folder.

### Clean styles, scripts, and images

This task is deleting whole files

## Tasks

### $ gulp watch

This task is watching all of SCSS and JS files and compiles them to minified version on every change. Using operations:
- Sass
- Styles
- Scripts validation
- Scripts

### $ gulp images

This task is compressing all images files anc copying them to destination folder. Using opartions:
- Images optim

### $ gulp serve

This task is creating virtual server for your project.

### $ gulp

This is a default task, which is compiling, uglifing and minifing all of files. Using operation:
- Clean
- Bower scripts
- Bower styles
- Sass
- Styles minified
- Scripts validation
- Scripts
- Images optim

ⓒ 2017 All rights reserved [WP Team](http://wpteam.com). WP Team is a division of Acclaim
