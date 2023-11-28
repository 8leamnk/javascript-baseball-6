import MESSAGE from '../../constants/message.js';
import VALUE from '../../constants/value.js';

const Validation = {
  validateDuplication(player, number) {
    if (player.has(number)) {
      throw new Error(MESSAGE.error.duplication);
    }
  },

  validateRange(number) {
    const { start, end } = VALUE.condition;

    if (number < start || number > end) {
      throw new Error(MESSAGE.error.playerRange);
    }
  },

  validateSize(size) {
    if (size !== VALUE.condition.size) {
      throw new Error(MESSAGE.error.size);
    }
  },
};

export default Validation;
