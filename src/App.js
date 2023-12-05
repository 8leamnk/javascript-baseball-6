import InputView from './view/InputView.js';

class App {
  async play() {}

  async #executeNumbers() {
    const answer = await InputView.readNumbers();
  }

  async #executeEndGame() {
    const answer = await InputView.readEndGame();
  }
}

export default App;
