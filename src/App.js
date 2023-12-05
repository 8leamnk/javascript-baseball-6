import Player from './domain/Player.js';
import InputView from './view/InputView.js';

class App {
  async play() {
    const player = await App.#executePlayer();
  }

  static async #executePlayer() {
    const answer = await InputView.readNumbers();
    const player = new Player(answer).getPlayer();

    return player;
  }

  async #executeEndGame() {
    const answer = await InputView.readEndGame();
  }
}

export default App;
