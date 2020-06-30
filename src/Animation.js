export default class Animation {
  constructor(element, callback) {
    this.element = element;

    if (callback && typeof callback === "function") {
      this.onEndCallbacks = [callback];
    } else {
      this.onEndCallbacks = [];
    }

    this.words = [];

    this.timeouts = [];

    this.changeWordState = this.changeWordState.bind(this);
    this.reset = this.reset.bind(this);
    this.resetTimeouts = this.resetTimeouts.bind(this);
    this.timeout = this.timeout.bind(this);

    this.init();
  }

  init() {
    const { element } = this;

    const text = element.innerText;

    const words = text.split(" ");

    element.innerHTML = "";

    words.forEach((word) => {
      const wordContainer = document.createElement("span");

      wordContainer.classList.add("word");

      wordContainer.innerText = `${word}\xa0`;

      wordContainer.dataset.state = "idle";

      element.appendChild(wordContainer);

      this.words.push(wordContainer);
    });
  }

  play(callback) {
    const { words, changeWordState, timeout } = this;

    if (callback && typeof callback === "function") {
      this.onEndCallbacks.push(callback);
    }

    const wordsToAnimate = words.filter((wordContainer) => {
      const { state } = wordContainer.dataset;

      return state === "idle" || state === "showed";
    });

    wordsToAnimate.forEach((word, index) => {
      const { state } = word.dataset;

      if (state === "idle") {
        timeout(() => {
          changeWordState(word, "showed");

          changeWordState(word, "animated");

          if (index === wordsToAnimate.length - 1) {
            this.onEndCallbacks.forEach((callback) => {
              word.addEventListener("transitionend", callback);
            });
          }
        }, index * 150);
      } else {
        changeWordState(word, "animated");
      }
    });

    return this;
  }

  reset() {
    const { resetTimeouts, words, changeWordState } = this;

    resetTimeouts();

    words.forEach((word) => {
      changeWordState(word);

      this.onEndCallbacks.forEach((callback) => {
        word.removeEventListener("transitionend", callback);
      });
    });

    return this;
  }

  pause() {
    this.resetTimeouts();

    return this;
  }

  resetTimeouts() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));

    this.timeouts = [];
  }

  changeWordState(word, state = "idle") {
    const { timeout } = this;

    if (state === "animated") {
      timeout(() => {
        word.dataset.state = state;
      }, 150);
    } else {
      word.dataset.state = state;
    }
  }

  timeout(callback, delay) {
    const timeout = setTimeout(() => callback(), delay);

    this.timeouts.push(timeout);
  }
}
