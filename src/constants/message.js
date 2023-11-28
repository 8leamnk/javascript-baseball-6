const MESSAGE = {
  input: {
    player: '숫자를 입력해주세요 : ',
  },

  error: {
    notNumber: '[ERROR] 숫자만 입력하세요.',
    duplication: '[ERROR] 중복된 숫자가 있습니다.',
    playerRange: '[ERROR] 1부터 9까지 서로 다른 수를 입력하세요.',
    size: '[ERROR] 3개의 수를 입력하세요.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
