# Text Animation JS

A small animation library inspired by this [tweet](https://twitter.com/Twitch/status/1237174754118905856).

<!-- TOC -->

- [Text Animation JS](#text-animation-js)
  - [Installation](#installation)
  - [How to use it](#how-to-use-it)
  - [Animation](#animation)
    - [Configuration](#configuration)
    - [Methods](#methods)
      - [Play](#play)
      - [Pause](#pause)
      - [Reset](#reset)
  - [Controlling multiple animations](#controlling-multiple-animations)
    - [Configuration](#configuration)
    - [Methods](#methods)
      - [Play](#play)
      - [Pause](#pause)
      - [Reset](#reset)
  - [Demos](#demos)
  - [TODO](#todo)
  - [Issues](#issues)

<!-- /TOC -->

## Installation

Just paste `npm install text-animation-js` in the console.

## How to use it

Just import the component and pass a HTML element to it.

```js
import Animation from "text-animation-js";

const animation = new Animation(document.querySelector("p"));
```

Call `new Animation()` will return an animation instance.

Also you need to import the css styles:

```js
import "text-animation-js/styles.css";
```

## Animation

### Configuration

`Animation` accepts two parameters, a HTML element and callback that will be called on animation end.

### Methods

Each `Animation` instance has three methods `play`, `pause`, and `reset`:

#### Play

Call `animation.play()` will start the animation, it returns the animation instance.

```js
document.querySelector("button").addEventListener("click", () => {
  animation.play();
});
```

This will start the animation when the `button` is clicked.

#### Pause

Call `animation.pause()` will pause the animation, it returns the animation instance.

```js
document.querySelector("button").addEventListener("click", () => {
  animation.pause();
});
```

This will pause the animation when the `button` is clicked.

#### Reset

Call `animation.reset()` will reset the animation, it returns the animation instance.

```js
document.querySelector("button").addEventListener("click", () => {
  animation.reset();
});
```

This will reset the animation when the `button` is clicked.

## Controlling multiple animations

This is a helper to control multiple animations with one call.

### Configuration

`AnimationList` accepts one parameter, an `Animation` array, this will be the animations to control.

```js
const animations = [
  new Animation(element1),
  new Animation(element2),
  new Animation(element3),
];

const animationList = new AnimationList(animations);
```

### Methods

Each `AnimationList` instance has three methods `play`, `pause`, and `reset`:

#### Play

Call `animationList.play()` will start the animations, it will wait for each animation to finish before starting the next one.

```js
document.querySelector("button").addEventListener("click", () => {
  animationList.play();
});
```

#### Pause

Call `animationList.pause()` will pause all the animations.

```js
document.querySelector("button").addEventListener("click", () => {
  animationList.pause();
});
```

#### Reset

Call `animationList.reset()` will reset all the animations.

```js
document.querySelector("button").addEventListener("click", () => {
  animationList.reset();
});
```

## Demos

You can find some demos [here](https://codesandbox.io/s/elastic-murdock-ycc0q).

## TODO

- [ ] animaciones personalizadas
- [ ] unit testing?

## Issues

- [ ] callback hell, Animation.play solo agrega callbacks, hay que limpiarlos después de lanzárlos
- [ ] AnimationList pause no funciona justo al final de la transición
