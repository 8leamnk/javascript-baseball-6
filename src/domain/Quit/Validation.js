import MESSAGE from '../../constants/message.js';
import VALUE from '../../constants/value.js';

const Validation = {
  validateRange(answer) {
    const { newStart, quit } = VALUE.condition;

    if (answer !== newStart && answer !== quit) {
      throw new Error(MESSAGE.error.quitRange);
    }
  },
};

export default Validation;
