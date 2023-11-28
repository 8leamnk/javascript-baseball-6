import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

class Computer {
  #computer = new Set();

  constructor() {
    this.#setComputer();
  }

  #setComputer() {
    const { size, start, end } = VALUE.condition;

    while (this.#computer.size < size) {
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
