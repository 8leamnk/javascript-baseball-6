import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const computer = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    const playerAnswer = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const player = [];

    // 유효성 검사 기능
    const NOT_NUMBER = /[^0-9]/;

    if (NOT_NUMBER.test(playerAnswer)) {
      throw new Error('[ERROR] 숫자만 입력하세요.');
    }

    playerAnswer.forEach((string) => {
      const number = Number(string);

      if (player.includes(number)) {
        throw new Error('[ERROR] 중복된 숫자가 있습니다.');
      }

      if (number < 1 || number > 9) {
        throw new Error('[ERROR] 1부터 9까지 서로 다른 수를 입력하세요.');
      }

      player.push(number);
    });

    if (player.length !== 3) {
      throw new Error('[ERROR] 3개의 수를 입력하세요.');
    }

    // 입력한 숫자에 대한 결과
    let ball = 0;
    let strike = 0;

    player.forEach((number, index) => {
      if (number === computer[index]) {
        strike += 1;
      } else if (computer.includes(number)) {
        ball += 1;
      }
    });

    // 결과를 도출하는 기능
    let hint = '낫싱';

    if (ball > 0 && strike > 0) {
      hint = `${ball}볼 ${strike}스트라이크`;
    } else if (ball > 0) {
      hint = `${ball}볼`;
    } else if (strike > 0) {
      hint = `${strike}스트라이크`;
    }

    Console.print(hint);

    // 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료
    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

      const quitAnswer = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      );

      // 게임을 다시 시작하거나 완전히 종료에 대한 유효성 검사 기능
      if (NOT_NUMBER.test(quitAnswer)) {
        throw new Error('[ERROR] 숫자만 입력하세요.');
      }

      if (quitAnswer !== '1' || quitAnswer !== '2') {
        throw new Error(
          '[ERROR] 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        );
      }
    }
  }
}

export default App;
