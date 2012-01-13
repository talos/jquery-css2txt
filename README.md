# jquery-css2txt

This jQuery plugin takes stylesheets and converts them back to
their textual representation.

[See it in action.](http://talos.github.com/jquery-css2txt/demo.html)

### Usage

Convert any number of CSSStyleSheet elements back to their
textual representation.

The length of the returned array will be the same as the passed
array.  Each CSSStyleSheet will be replaced with a String that
is its textual representation.  Any non-CSSStyleSheets will be
empty strings.

```javascript
    $(selector).css2txt();
```

### Examples

This will generate an array of the text from all the current
document's stylesheets.

```javascript
    $(document.styleSheets).css2txt();
```

### Links

Fork it from

http://www.github.com/talos/jquery-css2txt

CDN it at

http://talos.github.com/jquery-css2txt/jquery-css2txt.js

http://talos.github.com/jquery-css2txt/jquery-css2txt.min.js
