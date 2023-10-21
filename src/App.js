import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.gameStatus = 1;
  }

  async play() {
    const randomNumber = Random.pickNumberInRange(1, 999);
    Console.print("숫자 야구 게임을 시작합니다.");
    this.guessNumber(randomNumber);
  }

  guessNumber(randomNumber) {
    Console.readLineAsync()
  }
  
}

const app = new App();
app.play();

export default App;

/*
슈도 코드
- do while var1 == 1
  - 랜덤 숫자 3자리 구현
  - "숫자 야구 게임을 시작합니다." 프린트
  - do while var2 == random
    - "숫자를 입력해주세요 : " + var2 입력
    - 스트라이크 개수 구현
    - 볼 개수 구현
    - else (0볼 0스트라이크) 낫싱
  - "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
  - "게임을 새로 시작하시려면 1, 종료하려면 2를 입력하세요."
  - var1 입력
*/

// 1~3 스트라이크

// 1~3 볼

// 낫싱

// Random, Console API를 사용
// Random 값 추출은 Random.pickNumberInRange()으로
// 사용자 값의 입력, 출력은 Console.readLineAsync, Console.print

/* 
숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123
1볼 1스트라이크
숫자를 입력해주세요 : 145
1볼
숫자를 입력해주세요 : 671
2볼
숫자를 입력해주세요 : 216
1스트라이크
숫자를 입력해주세요 : 713
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
1
숫자를 입력해주세요 : 123
1볼
*/
