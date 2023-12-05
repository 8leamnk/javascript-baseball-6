import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readNumbers() {
    const answer = await Console.readLineAsync(MESSAGE.input.numbers);

    return answer;
  },

  async readEndGame() {
    const answer = await Console.readLineAsync(MESSAGE.input.endGame);

    return answer;
  },
};

export default InputView;
