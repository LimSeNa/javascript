// 함수 객체는 prototpy 프로퍼티를 소유한다.
(function () {}).hasOwnProperty('prototpye'); // true

// 일반 객체는 prototpy 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototpye'); // false