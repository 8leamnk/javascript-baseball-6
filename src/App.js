import Computer from './domain/Computer.js';
import Player from './domain/Player/index.js';
import Hint from './domain/Hint.js';
import Quit from './domain/Quit/index.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import VALUE from './constants/value.js';

class App {
  #computer = [];

  constructor() {
    OutputView.printIntro();
  }

  async play() {
    this.#computer = new Computer().getComputer();
    return this.#startGame();
  }

  async #startGame() {
    const playerAnswer = await InputView.readPlayer();
    const player = new Player(playerAnswer).getPlayer();
    const hintObject = new Hint(this.#computer, player);
    const strike = hintObject.getStrike();
    const hint = hintObject.getHint();

    OutputView.printHint(hint);

    if (strike === 3) {
      return this.#endGame();
    }
    return this.#startGame();
  }

  async #endGame() {
    OutputView.printCorrect();

    const quitAnswer = await InputView.readQuit();
    const quitOrNot = new Quit(quitAnswer).getQuit();

    if (quitOrNot === VALUE.condition.newStart) {
      return this.play();
    }
    return '';
  }
}

export default App;
