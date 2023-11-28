import Player from '../../src/domain/Player/index.js';
import MESSAGE from '../../src/constants/message.js';

describe('플레이어 클래스 테스트', () => {
  test.each([
    ['123', [1, 2, 3]],
    ['456', [4, 5, 6]],
    ['789', [7, 8, 9]],
  ])(
    '올바른 입력값일 때 플레이어의 숫자가 배열로 반환된다.',
    (input, output) => {
      // when
      const player = new Player(input).getPlayer();

      // then
      expect(player).toEqual(output);
    },
  );

  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '1e2';

    // then
    expect(() => {
      const playerObject = new Player(INPUT);
      return playerObject;
    }).toThrow(MESSAGE.error.notNumber);
  });

  test('숫자를 중복으로 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '112';

    // then
    expect(() => {
      const playerObject = new Player(INPUT);
      return playerObject;
    }).toThrow(MESSAGE.error.duplication);
  });

  test('1 ~ 9까지의 숫자를 입력하지 않으면 예외가 발생한다.', () => {
    // given
    const INPUT = '012';

    // then
    expect(() => {
      const playerObject = new Player(INPUT);
      return playerObject;
    }).toThrow(MESSAGE.error.playerRange);
  });

  test('3개의 숫자를 입력하지 않으면 예외가 발생한다.', () => {
    // given
    const INPUT = '1234';

    // then
    expect(() => {
      const playerObject = new Player(INPUT);
      return playerObject;
    }).toThrow(MESSAGE.error.size);
  });
});
