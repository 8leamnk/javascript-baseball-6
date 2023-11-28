import MESSAGE from '../constants/message.js';

const Util = {
  validateNumber(answer) {
    const NOT_NUMBER = /[^0-9]/;

    if (NOT_NUMBER.test(answer)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  },
};

export default Util;
