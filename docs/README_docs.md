# Standards of coding - by [WP Team](http://wpteam.com)

[![N|Solid](https://cldup.com/k_YU_-fvII.png)](http://wpteam.com)

## SCSS (with BEM)

Main style file is located in ```assets/styles/sass/style.scss```, it's build with 5 parts:

### 1. Bower components

Bower components part loads SCSS files for bower components which won't be automatiacally implemented i.e.:
- Bootstrap
- Font awesome
- Select2
- Hamburgers

### 2. Base
#### 2.1. Fonts
In this file you should create ```@mixin```s for all fonts that will be used in project.
Mixin should contain one value for ```font-weight```.

For Google Fonts and Typekit:

```sh
@mixin primary-font($fontWeight) {
    @if $fontWeight == "normal" {
        font-weight: 300;
    } @elseif $fontWeighte == "medium" {
        font-weight: 400;
    } @elseif $fontWeight == "bold" {
        font-weight: 700;
    }
    font-family: 'Lato', sans-serif;
    font-style: normal;
}
```

For @font-face generated:

```sh
@mixin secondary-font($fontWeight) {
    @if $fontWeight == "regular" {
        font-family: 'gotham-lightgotham-light', sans-serif;
    } @elseif $fontWeight == "medium" {
        font-family: 'gotham-bookgotham-book', sans-serif;
    } @elseif $fontWeight == "bold" {
        font-family: 'gotham-boldgotham-bold', sans-serif;
    }
    font-weight: normal;
    font-style: normal;
}
```

#### 2.2. Reset

It's reset for standard CSS rules, copied from [HTML5 Reset Styleshet](http://html5doctor.com/html-5-reset-stylesheet/). There are added few more styles for transitions to ```<a>```, and ```<button>``` tag.

### 3. Components

It's set of CSS clases which are using in some of the projects:

#### 3.1. Animsition

Fix for animsition plugin (turn it on if your project is using [Animsition](http://git.blivesta.com/animsition/) plugin).

#### 3.2. Bootstrap 4 Vertical Center Modal

Fix which allows you to vertical center standard [Bootstrap Modal](http://v4-alpha.getbootstrap.com/components/modal/).

Your html structure should look like here:

```sh
<div class="vertical-alignment-helper">
    [...]
    <div class="modal-dialog vertical-align-center" role="document">
        [...]
    </div>
    [...]
</div>
```

#### 3.3. Gravity forms reset styles

If your peojct contain [Gravity Forms](http://www.gravityforms.com) plugin you can simply reset all of standard CSS styles.

#### 3.4. Re-captcha resized on mobile

Fix which allows you to resize re-captcha container on smaller resoultions.

#### 3.5. Skip to main content

Component for the disabled users - facilitate navigation of the site.

#### 3.6. WP Admin Bar Fix

Fix for WP Admin Bar - which allows you show it correctly with our Wokflow.

### 4. Helpers

#### 4.1. Variables

In this file are set all of variables. Here you should set colors for you projects, i.e.:

```sh
$primary-color: #XXXXXX;
$secondary-color: #YYYYYY;
```

#### 4.2. Mixins

In this file are ```@mixin```s for current project. By default there are two mixins.

```@mixin fluid-type```
This mixin set max and min ```font-size``` and ```line-height```. It needs 3 values, first: The biggest ```font-size``` of content, second: the smallest ```font-size```, and third: ```line-height```. Example:
```sh
@include fluid-type(42px, 28px, 1.4);
```

```@mixin letter-spacing```
This mixin set ```letter-spacing``` for RWD. It needs 1 value: number of ```letter-spacing```. Example:
```sh
@include letter-spacing(200);
```

#### 4.3. Repeaters

In this file are set usefull classes to reusing them in project like section margins, section paddings, small margin from top for elements, background with cover option etc.

#### 4.4. Content

This file contain styles for ```.content``` class which should wrap all content elements on website.

First element fix set ```margin-top: 0``` for first element in ```.content``` div to avoid errors with current section spacings. Div ```.first-element-fix``` is automatically added into ```.content``` div in ```assets/scripts/main.js``` file.

Class ```.content``` set margins for headlines, and styles for ```<p>```, ```<ul>```, and ```<ol>``` tags. Otherwise it handle styles for ```<img>``` tag, included WordPress classes for images added in Content Editor.

### 5. Layout

#### 5.1. Pages -> Homepage, Header, Footer

Predfinied style file for Homepage, Header, and Footer

#### 5.2 General

In this file are set styles for ```body```, headlines, italic content, bold content, and some elements which are different for each project like hamburger colour or to top button colour. This is file where you should set all global styles.

ⓒ 2017 All rights reserved WP Team](http://wpteam.com). WP Team is a division of Acclaim
