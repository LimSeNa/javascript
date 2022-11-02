function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
/* 
{
  arguments: {value: null, writable: false, enumerable: false, configurable: false}
  caller: {value: null, writable: false, enumerable: false, configurable: false}
  length: {value: 1, writable: false, enumerable: false, configurable: true}
  name: {value: 'square', writable: false, enumerable: false, configurable: true}
  prototype: {value: {…}, writable: true, enumerable: false, configurable: false}
}
*/

console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); 
// undefined

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {enumerable: false, configurable: true, get: ƒ, set: ƒ}
