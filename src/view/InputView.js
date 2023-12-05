import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readNumbers() {
    const answer = await Console.readLineAsync(MESSAGE.input.numbers);

    return answer;
  },

  async readEDecision() {
    const answer = await Console.readLineAsync(MESSAGE.input.decision);

    return answer;
  },
};

export default InputView;
