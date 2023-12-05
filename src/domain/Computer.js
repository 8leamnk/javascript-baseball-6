import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

class Computer {
  #computer = new Set();

  constructor() {
    this.#createComputer();
  }

  #createComputer() {
    const { start, end } = VALUE.range;

    while (this.#computer.size < 3) {
      const number = Random.pickNumberInRange(start, end);

      if (!this.#computer.has(number)) {
        this.#computer.add(number);
      }
    }
  }

  getComputer() {
    return [...this.#computer];
  }
}

export default Computer;
