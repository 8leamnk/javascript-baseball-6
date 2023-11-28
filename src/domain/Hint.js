class Hint {
  #STRING = Object.freeze({
    strike: '스트라이크',
    ball: '볼',
    nothing: '낫싱',
  });

  #ball = 0;

  #strike = 0;

  #hint = this.#STRING.nothing;

  constructor(computer, player) {
    this.#setBallAndStrike(computer, player);
    this.#setHint();
  }

  #setBallAndStrike(computer, player) {
    player.forEach((number, index) => {
      if (number === computer[index]) {
        this.#strike += 1;
      } else if (computer.includes(number)) {
        this.#ball += 1;
      }
    });
  }

  #setHint() {
    const { ball, strike } = this.#STRING;

    if (this.#ball > 0 && this.#strike > 0) {
      this.#hint = `${this.#ball}${ball} ${this.#strike}${strike}`;
    } else if (this.#ball > 0) {
      this.#hint = `${this.#ball}${ball}`;
    } else if (this.#strike > 0) {
      this.#hint = `${this.#strike}${strike}`;
    }
  }

  getStrike() {
    return this.#strike;
  }

  getHint() {
    return this.#hint;
  }
}

export default Hint;
