import Decision from '../../src/domain/Decision.js';

describe('종료 결정 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e';

    // then
    expect(() => {
      const decision = new Decision(INPUT);
      return decision;
    }).toThrow('[ERROR]');
  });

  test('1 또는 2가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '3';

    // then
    expect(() => {
      const decision = new Decision(INPUT);
      return decision;
    }).toThrow('[ERROR]');
  });

  test.each([
    ['1', false],
    ['2', true],
  ])('1을 입력하면 false가, 2를 입력하면 true가 반환된다.', (input, output) => {
    // when
    const isEnd = new Decision(input).getDecision();

    // then
    expect(isEnd).toBe(output);
  });
});
