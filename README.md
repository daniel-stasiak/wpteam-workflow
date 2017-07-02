# WP Team - Workflow

[![N|Solid](https://cldup.com/k_YU_-fvII.png)](http://wpteam.com)

Workflow created to builidng custom WordPess themes - by [WP Team](http://wpteam.com).

## Workflow capabilities

To learn more about possiblities of our workflow please take a look at [Workflow capabilities](docs/README_docs.md).

## Step by step workflow implementation

See WP Team rules of [Step by step workflow implementation](docs/README_implementation.md).

## Quick Installation

Clone this repository to your ```wp-content/themes/``` folder.
```sh
$ git clone https://github.com/weareacclaim/wpteam-workflow.git
```
Install ```npm``` modules
```sh
$ npm install
```
Install ```bower``` components
```sh
$ bower install
```
Enjoy!

## What's included?

Workflow is currently based on [Bootstrap 4 (Alpha 6)](https://v4-alpha.getbootstrap.com). Structure of files is based on mobile-first coding. [Sass](http://sass-lang.com) is created using [BEM](http://getbem.com/introduction/) ideology. Repository is fully automated by [Gulp](http://gulpjs.com) tasks. Workflow includes [Bower](https://bower.io), so you can very easy include new plugins - thanks to Gulp all of JS and CSS files of Bower plugins are automatically included into main scripts and styles files.

## Gulp

If you want to know more about how is working our `gulpfile.js` please go to: [How's working our Gulp File](docs/README_gulp.md)

### Gulp features

1. Ultra-fast compiling SCSS to CSS
2. Concating and uglifing all CSS files (included Bower files) to one minify file
3. Concating and uglifing all JS files (included Bower files) to one minify file
4. Compressing all images
5. Watching your files

### Gulp tasks

The following tasks are available:

- `$ gulp watch` is watching all of SCSS and JS files and compiles them to minified version on every change
- `$ gulp images` is compressing all images files anc copying them to destination folder
- `$ gulp serve` is creating virtual server for your project
- `$ gulp` is a default task, which is compiling, uglifing and minifing all of files

## Bower compontents

Plugins preinstalled on this repo:

1. [Bootstrap 4 (Alpha 6)](https://v4-alpha.getbootstrap.com)
2. [Hamburgers](https://jonsuh.com/hamburgers/)
3. [Dense](http://dense.rah.pw)
4. [Font Awesome](http://fontawesome.io)
5. [jQuery](https://jquery.com)
6. [jQuery Easing](https://jqueryui.com/easing/)
7. [mmenu](http://mmenu.frebsite.nl)
8. [matchHeight](http://brm.io/jquery-match-height/)
9. [Modernizr](https://modernizr.com)
10. [Select2](https://select2.github.io)
11. [Tether](http://tether.io)

ⓒ 2017 All rights reserved [WP Team](http://wpteam.com). WP Team is a division of Acclaim