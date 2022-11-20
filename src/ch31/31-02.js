const target = 'Is this all there is?';

// 패턴 정의
// 패턴 : is, 플래그 : i (대소문자를 구별하지 않고 검색)
const regExp = /is/i;

// 패턴에 매칭하는지 확인(테스트)
regExp.test(target); // true