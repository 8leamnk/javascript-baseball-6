import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const playerAnswer = await Console.readLineAsync('숫자를 입력해주세요 : ');
  }
}

export default App;
