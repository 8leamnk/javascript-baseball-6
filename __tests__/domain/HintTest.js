import Hint from '../../src/domain/Hint.js';

describe('힌트 클래스 테스트', () => {
  test.each([
    [[1, 2, 3], [1, 2, 3], '3스트라이크'],
    [[2, 4, 6], [2, 3, 4], '1볼 1스트라이크'],
    [[7, 8, 9], [1, 2, 3], '낫싱'],
    [[7, 8, 9], [9, 7, 8], '3볼'],
  ])(
    '컴퓨터와 플레이어의 수를 비교하여 힌트를 얻는다.',
    (computer, player, output) => {
      // when
      const hint = new Hint(computer, player).getHint();

      // then
      expect(hint).toBe(output);
    },
  );
});
