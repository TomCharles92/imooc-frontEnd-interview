// console.log('this is index js');

// const sum = (a, b) => a + b
// console.log(sum(10, 20));

class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }

  sayHi() {
    console.log(`姓名 ${this.name}，学号 ${this.number}`);
  }
}

const xialuo = new Student('夏洛', 100)
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi()