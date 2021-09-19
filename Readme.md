## Index
**1. Execution Context**<br/>
**2. this**
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

<br/>

## this

### 1. what is this?

- 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수
- `실행컨텍스트`가 갖는 객체 중 하나 (context object)
- 런타임 시점에 바인딩 되며 `함수 호출` 당시 상황에 따라 콘텍스트가 결정
    - 바인딩이란 this 의 호출 방식에 따라 this 가 특정 객체에 연결
- 어떤 함수를 호출하면 실행 콘텍스트가 만들어지고, 호출된 근원(call-stack), 호출방법, 전달인자 등의 정보가 담겨있다.

<br/>

### 2. Why?

- 객체별로 따로 함수를 작성할 필요 없이 다중 콘텍스트 객체에서 모두 재사용이 가능하다.
- 사용패턴이 복잡해질수록 명시적인 인자로 콘텍스트를 넘기는 방법이 this 콘텍스트를 사용하는 것보다 지저분해진다.
- 여러 함수가 적절한 콘텍스트 객체를 자동참조하는 구조가 훨씬 편리하다

**JS 함수 호출 시**

- 매개변수로 전달되는 인자값 이외에, arguments 객체와 this를 암묵적으로 전달
- 모든 함수는 실행될 때마다 함수 내부에 this 라는 객체가 추가 (호출 컨텍스트가 갖고 있는 값 중 하나)
- 호출되는 상황에 따라 달라짐

```jsx

function square(number) {
  console.log(arguments);
  console.log(this);
  return number * number;
}

square(2);
```
<br/>


### 3. this 바인딩


**1. 암시적 바인딩**

'.' 바로 앞이 this 가 된다

```jsx
const person = {
  name: 'insong',
  age: 27,
  greet() {
    console.log(`hello I'm ${this.name}`);
  },
};

person.greet();
```

**2. 명시적 바인딩 (call, apply, bind)**

call, apply, bind 의 경우는 괄호 안에 들어가있는 첫 번째 단어가 this

bind : 바인딩이된 함수를 반환하며, 한번더 호출시 함수를 실행

call : 객채를 바인딩 함과 동시에 호출

apply : call 함수와 유사하지만, 매개변수는 배열로 받는것에 있어 차이

```jsx
function greet(hobby, x) {
	console.log(hobby, x)
  console.log(`hello, my name is ${this.name} I love ${hobby}`);
	console.log(arguments)
}

let user = {
  name: 'insong',
  age: 27,
};

greet.apply(user, ['basketball']);
greet.call(user, 'baseball');
greet.bind(user, 'football').call();
```

***3. new 바인딩***

*new 바인딩은 빈 객체를 가르킨다*

```jsx
function Person(name, age) {
  // console.log(this) Person {}
  this.name = name;
  // {}.name = name;
  this.age = age;
  // {}.age = age;
}

const me = new Person('insong', 27);
```

**new 연산자로 작성시 this 동작방식**

- 빈 객체 생성 및 this 바인딩
    - 생성자 함수의 코드가 실행되기 전 빈 객체가 생성
    - 이 빈 객체가 생성자 함수가 새로 생성하는 객체.
    - 이후 **생성자 함수 내에서 사용되는 this는 이 빈 객체를 가리킨다.**
    - 생성된 빈 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다.
- this를 통한 프로퍼티 생성
    - 생성된 빈 객체에 this를 사용하여 동적으로 프로퍼티나 메소드를 생성
    - this는 새로 생성된 객체를 가리키므로 this를 통해 생성한 프로퍼티와 메소드는 새로 생성된 객체에 추가
- 생성된 객체 반환

```jsx
function Person(name) {
  // 생성자 함수 코드 실행 전 -------- a
  this.name = name;  // --------- b
  // 생성된 함수 반환 -------------- c
}

var me = new Person('Lee');
console.log(me.name);
```

![스크린샷 2021-09-20 01 38 38](https://user-images.githubusercontent.com/73208317/133935530-25bdd611-c60b-43c3-a340-6df9034e9bcb.png)


**4.전역 객체 바인딩**

```jsx
function introduce() {
  console.log(`hello! my name is ${this.name}`);
}

const a = {
  name: 'insong',
  age: 27,
};

introduce(); //"hello! my name is undefined"
```

**5.strict mode**

```jsx
strict mode 에서는 다 undefined
```

<br/>

### 4. this 에 대해서 물어본다면

**1. what?**
자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수
런타임 시점에 바인딩 되며 함수 호출 당시 상황에 따라 콘텍스트가 결정되는 context object

**2. why or when?**

객체별로 따로 함수를 작성할 필요 없이 다중 콘텍스트 객체에서 모두 재사용이 가능하다.

**3. how?**

먼저, 호출부를 식별한다. 다음 4가지 경우 중 어느 경우인지 판단한 후 사용

1. new 로 호출 : 새로 생성된 객체에 바인딩
2. call, apply, bind 명시적 바인딩 : 주어진 객체로 바인딩
3. 콘텍스트 객체로 호출되었다면 이 콘텍스트 객체로 바인딩된다.
4. 기본 바인딩에서 엄격 모드에서는 undefined, 그 밖엔 전역 객체로 바인딩

<br/>

### REFERENCE

[https://velog.io/@holim0/Front-End-면접-질문-대비-Part1-hoisting-closure-this](https://velog.io/@holim0/Front-End-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%8C%80%EB%B9%84-Part1-hoisting-closure-this)

[https://junwoo45.github.io/2018-12-28-this/](https://junwoo45.github.io/2018-12-28-this/)

[https://eyabc.github.io/Doc/dev/core-javascript/this.html#함수-문맥](https://eyabc.github.io/Doc/dev/core-javascript/this.html#%ED%95%A8%EC%88%98-%EB%AC%B8%EB%A7%A5)

[https://poiemaweb.com/js-this](https://poiemaweb.com/js-this)
