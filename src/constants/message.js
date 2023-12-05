const MESSAGE = {
  input: {
    numbers: '숫자를 입력해주세요 : ',
    endGame: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  },

  error: {
    notNumber: '[ERROR] 숫자만 입력해 주세요.',
    range: '[ERROR] 1부터 9까지의 숫자만 입력해 주세요.',
    duplication: '[ERROR] 중복된 숫자가 있습니다.',
    length: '[ERROR] 3개의 숫자를 입력해 주세요.',
    decision: '[ERROR] 1 또는 2의 숫자여야 합니다.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE);

export default MESSAGE;
