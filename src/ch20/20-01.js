function foo() {
  x = 10; // 선언하지 않은 변수에 값 할당
}

foo();

console.log(x); // ? -> 10