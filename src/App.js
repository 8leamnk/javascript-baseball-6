import { Console } from '@woowacourse/mission-utils';
import Computer from './domain/Computer.js';
import Player from './domain/Player/index.js';
import Hint from './domain/Hint.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

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

    // 유효성 검사 기능
    const NOT_NUMBER = /[^0-9]/;

    Console.print(`data: ${this.#computer}, ${player}`);

    const hintObject = new Hint(this.#computer, player);
    const strike = hintObject.getStrike();
    const hint = hintObject.getHint();

    OutputView.printHint(hint);

    // 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료
    if (strike === 3) {
      OutputView.printCorrect();

      const quitAnswer = await InputView.readQuit();

      // 게임을 다시 시작하거나 완전히 종료에 대한 유효성 검사 기능
      if (NOT_NUMBER.test(quitAnswer)) {
        throw new Error('[ERROR] 숫자만 입력하세요.');
      }

      if (quitAnswer !== '1' && quitAnswer !== '2') {
        throw new Error(
          '[ERROR] 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        );
      }

      if (quitAnswer === '1') {
        this.#init();
        return this.play();
      }

      return '';
    }

    return this.play();
  }
}

export default App;
