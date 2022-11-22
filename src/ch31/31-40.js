const target = 'abc#123';

(/[^A-Za-z0-9]/gi).test(target); // true
// (/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi.test(target);

// 특수 문자를 제거
target.replace(/[^A-Za-z0-9]/gi, ''); //  abc123