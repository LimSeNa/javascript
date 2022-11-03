const circle = {
  radius: 5, // 반지름 - 원의 상태를 나타내는 데이터

  // 원의 지름 - 반지름을 가지고 구하는 동작
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이
  getArea() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(circle); // { radius: 5, getDiameter: f, getPerimeter: f, getArea: f }

console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483
