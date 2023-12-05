import Player from './domain/Player.js';
import Decision from './domain/Decision.js';
import InputView from './view/InputView.js';

class App {
  async play() {
    const player = await App.#executePlayer();

    const isEnd = await App.#executeDecision();
  }

  static async #executePlayer() {
    const answer = await InputView.readNumbers();
    const player = new Player(answer).getPlayer();

    return player;
  }

  static async #executeDecision() {
    const answer = await InputView.readEndGame();
    const isEnd = new Decision(answer).getDecision();

    return isEnd;
  }
}

export default App;
