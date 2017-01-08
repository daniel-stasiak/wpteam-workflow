# Step by step workflow implementation

## 1. Clone the repo

Clone this repository to your ```wp-content/themes/``` folder.
```sh
$ git clone https://github.com/weareacclaim/gulp-bower-webapp.git
```
Install ```npm``` modules
```sh
$ npm install
```
Install ```bower``` components
```sh
$ bower install
```

## 2. Fonts

### 2.1. Generate fonts

Add fonts from Google Font or TypeKit to ```<head>``` tag in ```partials/header/header.php``` or create ```@font-face``` on [@font-face generator](https://www.fontsquirrel.com/tools/webfont-generator) and place generated CSS in ```assets/styles/sass/base/_fonts.scss```.

### 2.2. Create mixins

Create ```@mixin``` to use the fonts in current project. To see how it should working go [here](docs/README_styles.md#21-fonts).

### 2.3. Set global font adjusts for current project.

In ```assets/styles/sass/layout/_general.scss``` you should set [fluid type mixin](docs/README_styles.md#42-mixins) for whole document body. It should be the ```font-size```, ```line-height```, ```font-family```, and ```font-weight``` for paragraphs from PSD. Example:

```sh
body {
    background: #fff;
    @include primary-font('regular');
    @include fluid-type(18px, 16px, 1.4);
}
```

### 2.4. Set font adjusts for headlines

Set ```font-size```, ```line-height```, ```font-family```, and ```font-weight``` for headlines. Example:

```sh
h1,
h2,
h3,
h4 {
    @include primary-font('bold');
}

h1 {
    @include fluid-type(62px, 42px);
}

h2 {
    @include fluid-type(48px, 36px);
}

h3 {
    @include fluid-type(38px, 28px);
}

h4 {
    @include fluid-type(32px, 24px);
}
```

### 2.5. Set font adjusts for italic and bold content

Example:

```sh
b,
strong {
    @include primary-font('bold');
}

em {
    font-style: italic;
}
```

ⓒ 2017 All rights reserved [WP Team](http://wpteam.com). WP Team is a division of Acclaim
