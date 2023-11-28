import Hint from '../../src/domain/Hint.js';

describe('힌트 클래스 테스트', () => {
  test.each([
    [[1, 2, 3], [1, 2, 3], 3, '3스트라이크'],
    [[1, 3, 5], [1, 2, 3], 1, '1볼 1스트라이크'],
    [[4, 5, 6], [1, 2, 3], 0, '낫싱'],
  ])(
    '컴퓨터와 플레이어가 주어질 때 스트라이크 개수와 힌트를 반환한다.',
    (computer, player, strikeOutput, hintOutput) => {
      // when
      const hintObject = new Hint(computer, player);
      const strike = hintObject.getStrike();
      const hint = hintObject.getHint();

      // then
      expect(strike).toBe(strikeOutput);
      expect(hint).toBe(hintOutput);
    },
  );
});
