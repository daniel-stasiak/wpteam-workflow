# WebApp Generator

Generator with bower and gulp for new project created by [WP Team](http://wpteam.com).

[![N|Solid](https://cldup.com/k_YU_-fvII.png)](http://wpteam.com)

## WP Team standards of coding

Please take a look at WP Team [standards of coding](docs/README_docs.md) created for our workflow.

## Installation

Clone this repository to your local
```sh
git clone https://github.com/weareacclaim/gulp-bower-webapp.git
```
Install npm modules
```sh
npm install
```
Install bower components
```sh
bower install
```
Enjoy!

## Gulp
This package comes with Gulp and Bower.

### Gulp features

1. Ultra-fast compiling SCSS to CSS
2. Concating and uglifing all CSS files (included Bower files) to one minify file
3. Concating and uglifing all JS files (included Bower files) to one minify file
4. Compressing all images
5. Watching your files

### Gulp tasks
The following tasks are available:

- `gulp watch` is watching all of SCSS and JS files and compiles them to minified version on every change
- `gulp images` is compressing all images files anc copying them to destination folder
- `gulp serve` is creating virtual server for your project
- `gulp` is a default task, which is compiling, uglifing and minifing all of files

ⓒ 2017 All rights reserved. [WP Team](http://wpteam.com). WP Team is a division of Acclaim