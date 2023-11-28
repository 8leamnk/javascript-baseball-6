import Validation from './Validation.js';
import Util from '../../util/Util.js';

class Quit {
  #quitOrNot;

  constructor(answer) {
    this.#quitOrNot = answer;
    this.#validate();
  }

  #validate() {
    Util.validateNumber(this.#quitOrNot);
    Validation.validateRange(this.#quitOrNot);
  }

  getQuit() {
    return this.#quitOrNot;
  }
}

export default Quit;
