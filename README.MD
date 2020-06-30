# Text Animation JS

A small animation library inspired by this [tweet](https://twitter.com/Twitch/status/1237174754118905856).

<!-- TOC -->

- [Text Animation JS](#text-animation-js)
  - [Installation](#installation)
  - [How to use it](#how-to-use-it)
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

- [ ] animaciones personalizadas
- [ ] unit testing?
- [ ] agregar documentación de AnimationList
- [ ] agregar documentación de onAnimationEnd callback
- [ ] pagina de ejemplos (playground)

## Issues

- [ ] callback hell, Animation.play solo agrega callbacks, hay que limpiarlos después de lanzárlos
- [ ] AnimationList pause no funciona justo al final de la transición
