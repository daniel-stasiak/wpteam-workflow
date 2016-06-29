# WebApp Generator

Generator with bower and gulp for new project created by [Dawid Stasiak](https://dawidstasiak.pl/en).

Repository works great with WordPress.

## Gulp.js featurs

1. Compile SCSS to CSS
2. Concat and uglify all CSS files to one minify file
3. Concat and uglify all JS files to one minify file
4. Auto adding bower files to your assets folder
5. Watch your files

```gulp watch```

This task is watching all of files (like SCSS or JS) and compile them to minified version after every change.

```gulp serve```

This task make's for you virtual server and show your changes live

```gulp (default)```

This is the default task which compiled all files, uglify, and minify them

## Installation

1. Clone this repository to your local ```git clone https://github.com/agencja-acclaim/gulp-bower-webapp.git```
2. Install npm modules ```npm install```
3. Install bower components ```bower install```
4. Enjoy!

(C) Acclaim. 2016. All rights reserved.