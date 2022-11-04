(function () {
  // non-strict mode
  var let = 10; // 에러 발생하지 않음

  function foo() {
    // 'use strict';

    let = 20; // SyntaxError: Unexpected strict mode reserved word
  }

  foo();
})();
