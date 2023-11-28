import Validation from './Validation.js';
import Util from '../../util/Util.js';

class Player {
  #player = new Set();

  constructor(answer) {
    this.#validate(answer);
  }

  #validate(answer) {
    Util.validateNumber(answer);

    answer.split('').forEach((string) => {
      const number = Number(string);

      Validation.validateDuplication(this.#player, number);
      Validation.validateRange(number);

      this.#player.add(number);
    });

    Validation.validateSize(this.#player.size);
  }

  getPlayer() {
    return [...this.#player];
  }
}

export default Player;
