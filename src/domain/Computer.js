import { Random } from '@woowacourse/mission-utils';

class Computer {
  static #RANGE = {
    start: 1,
    end: 9,
  };

  #computer = new Set();

  constructor() {
    this.#createComputer();
  }

  #createComputer() {
    const { start, end } = Computer.#RANGE;

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
