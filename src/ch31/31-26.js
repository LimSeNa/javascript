const target = 'AA BB 12,345';

// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색
let regExp = /[\d,]+/g;

target.match(regExp);

// '0' ~ '9' 가 아닌 문자(숫자가 아닌 문다) 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색
regExp = /[\D,]+/g;

target.match(regExp);