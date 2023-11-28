import Quit from '../../src/domain/Quit/index.js';
import MESSAGE from '../../src/constants/message.js';

describe('새로 시작 혹은 완전 종료 클래스를 테스트', () => {
  test.each([['1'], ['2']])(
    '1 혹은 2를 입력하면 제대로 해당 값이 반환된다.',
    (value) => {
      // when
      const quit = new Quit(value).getQuit();

      // then
      expect(quit).toBe(value);
    },
  );

  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e';

    // then
    expect(() => {
      const quitObject = new Quit(INPUT);
      return quitObject;
    }).toThrow(MESSAGE.error.notNumber);
  });

  test('1 또는 2가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '3';

    // then
    expect(() => {
      const quitObject = new Quit(INPUT);
      return quitObject;
    }).toThrow(MESSAGE.error.quitRange);
  });
});
