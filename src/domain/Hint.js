class Hint {
  static #HINT_MESSAGE = {
    strike: '스트라이크',
    ball: '볼',
    nothing: '낫싱',
  };

  #strike = 0;

  #ball = 0;

  constructor(computer, player) {
    this.#compare(computer, player);
  }

  #compare(computer, player) {
    player.forEach((number, index) => {
      if (number === computer[index]) {
        this.#strike += 1;
      } else if (computer.includes(number)) {
        this.#ball += 1;
      }
    });
  }

  getHint() {
    const { ball, strike, nothing } = Hint.#HINT_MESSAGE;
    let hint = nothing;

    if (this.#ball > 0 && this.#strike > 0) {
      hint = `${this.#ball}${ball} ${this.#strike}${strike}`;
    } else if (this.#strike > 0) {
      hint = `${this.#strike}${strike}`;
    } else if (this.#ball > 0) {
      hint = `${this.#ball}${ball}`;
    }

    return hint;
  }
}

export default Hint;
