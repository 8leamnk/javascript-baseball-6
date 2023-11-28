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
    this.#init();
  }

  #init() {
    this.#computer = new Computer().getComputer();
  }

  async play() {
    const playerAnswer = await InputView.readPlayer();
    const player = new Player(playerAnswer).getPlayer();
    const hintObject = new Hint(this.#computer, player);
    const strike = hintObject.getStrike();
    const hint = hintObject.getHint();

    OutputView.printHint(hint);

    // 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료
    if (strike === 3) {
      OutputView.printCorrect();

      const quitAnswer = await InputView.readQuit();
      const quitOrNot = new Quit(quitAnswer).getQuit();

      if (quitOrNot === VALUE.condition.newStart) {
        this.#init();
        return this.play();
      }

      return '';
    }

    return this.play();
  }
}

export default App;
