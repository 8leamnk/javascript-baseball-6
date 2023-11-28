import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printIntro() {
    Console.print(MESSAGE.output.intro);
  },

  printHint(hint) {
    Console.print(hint);
  },

  printCorrect() {
    Console.print(MESSAGE.output.correct);
  },
};

export default OutputView;
