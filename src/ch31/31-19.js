const target = 'A AA B BB Aa Bb';

// 'A' 또는 'B'를 전역 검색
const regExp = /A|B/g;

target.match(regExp);