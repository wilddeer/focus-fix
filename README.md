Focus fix
=========

Adds `is-mouse-focused` class to clicked elements (and removes it after `blur`), so you can separate mouse/touch focus style and keyboard focus style.

```css
/* keyboard focus style */
:focus {
  outline: 1px solid blue;
}

/* mouse/touch focus style */
:active,
.is-mouse-focused:focus {
    outline: none;
}
```

`:active` is required to prevent flickering.

[CC0](https://creativecommons.org/publicdomain/zero/1.0/)
