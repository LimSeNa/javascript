// 'use strict';
// 빨간 줄 뜨는 이유 : ESLint에서 strict mode로 관리하고 있어서 'use strict' is unnecessary inside of modules.
// 불필요한 내부 모듈이라고 뜨는 듯

function foo() {
  x = 10; // ReferenceError: x is not defined
}

foo();
