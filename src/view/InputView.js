import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readPlayer() {
    const answer = await Console.readLineAsync(MESSAGE.input.player);

    return answer;
  },

  async readQuit() {
    const answer = await Console.readLineAsync(MESSAGE.input.quit);

    return answer;
  },
};

export default InputView;
