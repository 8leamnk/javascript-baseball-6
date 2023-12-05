import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';

class Decision {
  static #MARK = { newStart: 1, end: 2 };

  #number;

  constructor(answer) {
    this.#number = Number(answer);
    this.#validate(answer);
  }

  #validate(answer) {
    Util.vlidateNumber(answer);
    this.#validateRange();
  }

  #validateRange() {
    const { newStart, end } = Decision.#MARK;

    if (this.#number !== newStart && this.#number !== end) {
      throw new Error(MESSAGE.error.decision);
    }
  }

  getDecision() {
    let isEnd = false;

    if (this.#number === Decision.#MARK.end) {
      isEnd = true;
    }

    return isEnd;
  }
}

export default Decision;
