# Vanilla Smoothscroll (from Jump.js converted to ES5 JavaScript)

Note that the singleton can make an infinite number of jumps.

## Options

All options, **except [target](#target)**, are optional, and have sensible defaults. The defaults are shown below:

```es6
jump('.target', {
  duration: 1000,
  offset: 0,
  callback: undefined,
  easing: easeInOutQuad,
  a11y: false
})
```

Explanation of each option follows:

* [target](#target)
* [duration](#duration)
* [offset](#offset)
* [callback](#callback)
* [easing](#easing)
* [a11y](#a11y)

### target

Scroll _from the current position_ by passing a number of pixels.

```es6
// scroll to 100px (relative to top of page)

jump(100)

```

Or, scroll _to an element_, by passing either:

* a node, or
* a CSS selector

```es6
// passing a node

const node = document.querySelector('.target')

jump(node)

// passing a CSS selector
// the element referenced by the selector is determined using document.querySelector

jump('.target')
```

### duration

Pass the time the `jump()` takes, in milliseconds.

```es6
jump('.target', {
  duration: 1000
})
```

Or, pass a function that returns the duration of the `jump()` in milliseconds. This function is passed the `jump()` `distance`, in `px`, as a parameter.

```es6
jump('.target', {
  duration: distance => Math.abs(distance)
})
```

### offset

Offset a `jump()`, _only if to an element_, by a number of pixels.

```es6
// stop 10px before the top of the element

jump('.target', {
  offset: -10
})

// stop 10px after the top of the element

jump('.target', {
  offset: 10
})
```

Note that this option is useful for accommodating `position: fixed` elements.

### callback

Pass a function that will be called after the `jump()` has been completed.

```es6
// in both regular and arrow functions, this === window

jump('.target', {
  callback: () => console.log('Jump completed!')
})
```

### easing

Easing function used to transition the `jump()`.

```es6
jump('.target', {
  easing: easeInOutQuad
})
```

See [easing.js](https://github.com/callmecavs/jump.js/blob/master/src/easing.js) for the definition of `easeInOutQuad`, the default easing function. Credit for this function goes to Robert Penner.

### a11y

If enabled, _and scrolling to an element_:

* add a [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) to, and
* [`focus`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) the element

```es6
jump('.target', {
  a11y: true
})
```

Note that this option is disabled by default because it has _visual implications_ in many browsers. Focusing an element triggers the `:focus` CSS state selector, and is often accompanied by an `outline`.

## Browser Support

Jump depends on the following browser APIs:

* [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

Consequently, it supports the following natively:

* Chrome 24+
* Firefox 23+
* Safari 6.1+
* Opera 15+
* IE 10+
* iOS Safari 7.1+
* Android Browser 4.4+

To add support for older browsers, consider including polyfills/shims for the APIs listed above. There are no plans to include any in the library, in the interest of file size.

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea