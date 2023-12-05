import Computer from './domain/Computer.js';
import Player from './domain/Player.js';
import Hint from './domain/Hint.js';
import Decision from './domain/Decision.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  static #CORRECT_CONDITION = '3스트라이크';

  constructor() {
    OutputView.printIntro();
  }

  async play() {
    const computer = new Computer().getComputer();
    return this.#startGame(computer);
  }

  async #startGame(computer) {
    const answer = await InputView.readNumbers();
    const player = new Player(answer).getPlayer();
    const hint = new Hint(computer, player).getHint();

    OutputView.printHint(hint);

    if (hint === App.#CORRECT_CONDITION) {
      return this.#endGame();
    }

    return this.#startGame(computer);
  }

  async #endGame() {
    OutputView.printCorrect();

    const answer = await InputView.readEDecision();
    const isEnd = new Decision(answer).getDecision();

    if (!isEnd) {
      return this.play();
    }

    return '';
  }
}

export default App;
