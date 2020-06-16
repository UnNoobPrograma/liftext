class Animation {
  constructor(element) {
    this.element = element;

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

  play() {
    const { words, changeWordState, timeout } = this;

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
        }, index * 150);
      } else {
        changeWordState(word, "animated");
      }
    });
  }

  reset() {
    const { resetTimeouts, words, changeWordState } = this;

    resetTimeouts();

    words.forEach((word) => {
      changeWordState(word);
    });
  }

  pause() {
    this.resetTimeouts();
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

const paragraphs = [...document.querySelectorAll("p")];

const animations = paragraphs.map((paragraph) => new Animation(paragraph));

window.animate.addEventListener("click", () => {
  animations.map((animation) => animation.play());
});

window.reset.addEventListener("click", () => {
  animations.map((animation) => animation.reset());
});

window.pause.addEventListener("click", () => {
  animations.map((animation) => animation.pause());
});
