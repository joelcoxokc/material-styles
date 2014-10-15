

Material-Styles
===============

### Inspired by [Google Material Design](http://www.google.com/design/spec/style/color.html).

#### [DEMO](http://material-styles.azurewebsites.net).


###Installation
`bower install --save material-styles`

> Material-Styles comes with some pretty cool HTML5 and CSS3 styles.
The main purpose of this package is to provide users with the ability to use all of google's materail design colors with bootstrap, or for your own styling purposes.

----------

####TODO: 
- Complete Border coloring: works, but there are bugs.

----------

##Usage
####background-color
On any given element you can add a background-color to it by doing one of the following.
Say I wanted to use **red-300** from the [Material Color Palette ](http://www.google.com/design/spec/style/color.html).

>You can use it as an attribute

```html
<div color-red-300></div>
```
 
>You can set the 'color' attribute equal to the color name

```html
<div color='red-300'></div> 
```
 
>You can use css classes

```html
<div class='color-red-300'></div> 
```

###btn-color
On any given `<button>` or `<a>` you can add a background-color that uses sudo selectors like 
`:hover, :active, :focus` to it by doing one of the following.
Say I wanted to use **blue-A400** from the [Material Color Palette ](http://www.google.com/design/spec/style/color.html).

>You can use it as an attribute

```html
<button btn-blue-A400></button>
```
 
>You can set the 'color' attribute equal to the color name

```html
<button btn-color='blue-A400'></button> 
```
 
>You can use css classes

```html
<a class='btn-blue-A400'></a>
```

###text-color
On any given `<element>`  you can add a text-color to it by doing one of the following.
Say I wanted to use **deep-orange-900** from the [Material Color Palette ](http://www.google.com/design/spec/style/color.html).

>You can use it as an attribute

```html
<h1 text-deep-orange-900></h1>
```
 
>You can set the 'color' attribute equal to the color name

```html
<p text-color='deep-orange-900'></p> 
```
 
>You can use css classes

```html
<input type='text' class='text-deep-orange-900'>
```
