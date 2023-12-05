import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Player {
  #player = new Set();

  constructor(answer) {
    this.#validate(answer);
  }

  #validate(answer) {
    Util.vlidateNumber(answer);

    answer.split('').forEach((number) => {
      Player.#validateRange(number);
      this.#validateDuplication(number);
    });

    this.#validateSize();
  }

  static #validateRange(number) {
    const { start, end } = VALUE.range;

    if (number < start || number > end) {
      throw new Error(MESSAGE.error.range);
    }
  }

  #validateDuplication(number) {
    if (this.#player.has(number)) {
      throw new Error(MESSAGE.error.duplication);
    }

    this.#player.add(number);
  }

  #validateSize() {
    if (this.#player.size !== VALUE.range.length) {
      throw new Error(MESSAGE.error.length);
    }
  }

  getPlayer() {
    return [...this.#player];
  }
}

export default Player;
