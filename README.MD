# Exhiban

A small animation library inspired by this [tweet](https://twitter.com/Twitch/status/1237174754118905856).

<!-- TOC -->

- [Exhiban](#exhiban)
  - [Installation](#installation)
  - [How to use it](#how-to-use-it)
  - [TODO](#todo)

<!-- /TOC -->

## Installation

Just paste `npm install exhiban` in the console.

## How to use it

Just import the component and pass a HTML element to it.

```js
import Animation from "exhiban";

const animation = new Animation(document.querySelector("p"));
```

Each animation instance has three methods `play`, `pause`, and `reset`:

- `play` method will start the animation
- `pause` method will pause the animation
- `reset` method will reset the animation

```js
document.querySelector("button#play").addEventListener("click", () => {
  animation.play();
});
```

This will start the animation when the `button#play` is clicked.

## TODO

- [x] publicar en npm
- [ ] exponer cuando termina de animar
- [ ] animar elementos secuencialmente (animar el siguiente elemento cuando termine el anterior solo pasando una lista)
- [ ] animaciones personalizadas
- [ ] ponerle un mejor nombre (i.e: liftext)
- [ ] unit testing?
