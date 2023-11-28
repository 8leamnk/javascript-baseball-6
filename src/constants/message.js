const MESSAGE = {
  input: {
    player: '숫자를 입력해주세요 : ',
  },

  output: {
    intro: '숫자 야구 게임을 시작합니다.',
    correct: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  },

  error: {
    notNumber: '[ERROR] 숫자만 입력하세요.',
    duplication: '[ERROR] 중복된 숫자가 있습니다.',
    playerRange: '[ERROR] 1부터 9까지 서로 다른 수를 입력하세요.',
    size: '[ERROR] 3개의 수를 입력하세요.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
