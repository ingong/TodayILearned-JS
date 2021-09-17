## Index

1. Execution Context

<br/>
<br/>

## Execution Context (실행 컨텍스트)

### 1. 실행 컨텍스트

실행 가능한 `코드`를 `형상화` 하고 `구분`하는 추상적인 개념으로, 코드가 실행되고 있는 구역 또는 범위

### 2. JS 엔진이 코드를 실행하기 위해 알아야하는 정보

- Variable : 전역변수, 지역변수, 매개변수, 객체의 프로퍼티
- Argument : 인자 객체
- Scope : 변수의 유효범위
- This

실행 컨텍스트의 유형에 따라 달라질 수 있다.

### 3. 실행 컨텍스트의 유형

**실행 구역 또는 범위**에 따라 실행 컨텍스트의 유형을 구분

1. 전역 컨텍스트 (Global Execution Context)
   - 실행 컨텍스트의 가장 기초가 되는 구간 또는 범위로,
   - `함수` 구간 안에서 실행되는 코드가 아니라면 대부분 전역 컨텍스트 안에서 실행된다.
   - 전역 컨텍스트에서는 두 가지 작업이 발생
     1. `window` 객체인 전역 컨텍스트 생성
     2. `this` 를 전역 객체로 할당
2. 함수 컨텍스트 (Functional Execution Context)
   - 함수가 실행될때마다 해당 함수의 실행 컨텍스트가 생성
   - `호출` 이 발생될때마다 각 함수의 함수 컨텍스트가 생성
3. Eval 함수 컨텍스트 (Eval Function Execution Context)

### 4. 실행 컨텍스트의 생성과 실행 관리

JS 엔진이 script 태그를 만나면,

**예시**

```jsx
var x = 'xxx';

function foo() {
  var y = 'yyy';

  function bar() {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}
foo();
```

1. 실행 가능한 코드로 **제어권(control)** 이 이동하면 논리적 스택 구조를 가지는 빈 실행 컨텍스트 스택이 생성
2. **제어권** 이 전역 코드로 이동하면 **전역 실행 컨텍스트** 가 생성되며 비어있는 컨텍스트 스택에 *push*
3. 그리고 전역환경에서 함수를 호출하면 **제어권** 이 함수 코드로 이동하면서 호출된 함수의 **함수 컨텍스트** 가 생성 및 **실행 스택**에 *push*. 즉, 스택의 가장 마지막 순서로 *삽입됨*
4. Javascript 엔진은 **실행 스택** 에서 가장 상단에 있는 **실행 컨텍스트** 부터 *실행*
5. 각 **실행 컨텍스트** 가 종료되고 나면 **실행 스택** 에서 *제거 (pop)* 되고, **_LIFO_**의 순서에 맞춰서 **제어권**이 이동한다.

![스크린샷 2021-09-18 00 34 22](https://user-images.githubusercontent.com/73208317/133814765-3adb172f-1937-41c6-8199-7ef902aa41d3.png)

### 5. 실행 컨텍스트의 3가지 객체

- 실행 컨텍스트는 실행가능한 코드를 형상화하고 구분하는 추상적인 개념 but 물리적으로는 객체의 형태

![스크린샷 2021-09-18 00 34 28](https://user-images.githubusercontent.com/73208317/133814835-c8bacfd6-2630-44b2-af0d-72320c995758.png)

1. Variable Object
   - 실행에 필요한 여러 정보를 담을 객체를 생성(변수 객체)
   - 코드가 실행될 때 엔진에 의해 참조, 코드에서는 접근할 수 없음
   - Variable Object 가 담는 객체 : 변수, 매개변수(parameter)와 인수정보(argument), 함수 선언
2. Scope Chain

   - 엔진은 스코프 체인을 통해 렉시컬 스코프를 파악
   - 함수가 중첩 상태일 때 하위함수 내에서 상위함수의 스코프와 전역 스코프까지 참조
     ⇒ 본인의 스코프를 확인하고, 해당 변수가 없으면 상위 스코프로 이동해서 탐색
   - 함수가 중첩되어 있으면 중첩될 때마다 부모 함수의 Scope가 자식 함수의 스코프 체인에 포함
     ⇒ 스코프 체인

3. `this Value`
   - `함수 호출 패턴에 의해 결정된다.`

### Reference

[https://poiemaweb.com/js-execution-context](https://poiemaweb.com/js-execution-context)</br>
[https://joontae-kim.github.io/2020/10/12/excution-context/](https://joontae-kim.github.io/2020/10/12/excution-context/)

---
