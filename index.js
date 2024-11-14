// const car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// const car1 = new car("honda", 100);
// console.log(car1);

// car.prototype.accelerate = function () {
//   const newSpeed = this.speed + 10;
//   console.log(newSpeed);
// };

// car1.accelerate();
class Person {
  constructor(fName, birthYear) {
    (this.fName = fName), (this.birthYear = birthYear);
  }
  calcAge() {
    console.log(2030 - this.birthYear);
  }
  showName() {
    console.log(this.fName);
  }
}

const Ali = new Person("Ali", 1990);

console.log(Ali.__proto__ === Person.prototype);
