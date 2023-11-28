import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

class Computer {
  #computer = new Set();

  constructor() {
    this.#setComputer();
  }

  #setComputer() {
    const { size, start, end } = VALUE.condition;

    while (this.#computer.length < size) {
      const number = Random.pickNumberInRange(start, end);

      if (!this.#computer.includes(number)) {
        this.#computer.push(number);
      }
    }
  }

  getComputer() {
    return [...this.#computer];
  }
}

export default Computer;
