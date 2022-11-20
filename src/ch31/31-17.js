const target = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 한 번 이상 반복되는 문자열('A' 만으로 이루어진 문자열)을 전역 검색
const regExp = /A+/g;

target.match(regExp);