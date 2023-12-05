import Player from '../../src/domain/Player.js';

describe('플레이어 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '2e3';

    // then
    expect(() => {
      const player = new Player(INPUT);
      return player;
    }).toThrow('[ERROR]');
  });

  test('중복된 숫자를 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '223';

    // then
    expect(() => {
      const player = new Player(INPUT);
      return player;
    }).toThrow('[ERROR]');
  });

  test('1부터 9까지의 숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '023';

    // then
    expect(() => {
      const player = new Player(INPUT);
      return player;
    }).toThrow('[ERROR]');
  });

  test('3개의 숫자를 입력하지 않으면 예외가 발생한다.', () => {
    // given
    const INPUT = '73';

    // then
    expect(() => {
      const player = new Player(INPUT);
      return player;
    }).toThrow('[ERROR]');
  });

  test('숫자를 올바르게 입력하면 배열로 반환된다.', () => {
    // given
    const INPUT = '257';
    const OUTPUT = [2, 5, 7];

    // when
    const player = new Player(INPUT).getPlayer();

    // then
    expect(player).toEqual(OUTPUT);
  });
});
