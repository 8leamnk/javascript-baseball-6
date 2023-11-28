import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printIntro() {
    Console.print(MESSAGE.output.intro);
  },
};

export default OutputView;
