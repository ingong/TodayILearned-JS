// 1. 암식적 바인딩
// '.' 바로 앞이 this 가 된다
const person = {
  name: 'insong',
  age: 27,
  greet() {
    console.log(`hello I'm ${this.name}`);
  },
};

person.greet();

// 2. 명시적 바인딩 (call, apply, bind)
// call, apply, bind 의 경우는 괄호 안에 들어가있는 첫 번째 단어가 this
// apply : call 함수와 유사하지만, 매개변수는 배열로 받는것에 있어 차이
// call : 객채를 바인딩 함과 동시에 호출
// bind : 바인딩이된 함수를 반환하며, 한번더 호출시 함수를 실행
function greet(hobby) {
  console.log(`hello, my name is ${this.name} I love ${hobby}`);
}

const user = {
  name: 'insong',
  age: 27,
};

greet.apply(user, ['basketball']);
greet.call(user, 'baseball');
greet.bind(user, 'football').call();

// 3. new 바인딩
// new 바인딩은 빈 객체를 가르킨다
function Person(name, age) {
  // console.log(this) Person {}
  this.name = name;
  // {}.name = name;
  this.age = age;
  // {}.age = age;
}

const me = new Person('insong', 27);

// 4. 전역 객체 바인딩
function introduce() {
  console.log(`hello! my name is ${this.name}`);
}

const a = {
  name: 'insong',
  age: 27,
};

introduce(); //"hello! my name is undefined"

// 5. strict mode
// strict mode 에서는 다 undefined
