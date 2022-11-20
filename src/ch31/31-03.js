const target = 'Is this all there is?';

// 패턴 정의
const regExp = new RegExp(/is/i);

// 패턴에 매칭하는지 확인(테스트)
regExp.test(target); // true