export default class AnimationList {
  constructor(animations) {
    this.animations = animations;

    this.currentAnimation = animations[0];
  }

  setCurrentAnimation(animation) {
    this.currentAnimation = animation;
  }

  nextAnimation(currentAnimation) {
    const nextAnimation = currentAnimation + 1;

    if (nextAnimation < this.animations.length - 1) {
      this.currentAnimation = this.animations[nextAnimation].play(() =>
        this.nextAnimation(nextAnimation)
      );
    } else {
      this.currentAnimation = this.animations[nextAnimation].play();
    }
  }

  play() {
    this.currentAnimation = this.currentAnimation.play(() =>
      this.nextAnimation(0)
    );
  }

  pause() {
    this.currentAnimation.pause();
  }

  reset() {
    this.animations.forEach((animation) => animation.reset());

    this.currentAnimation = this.animations[0];
  }
}
