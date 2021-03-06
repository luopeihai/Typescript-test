// interface Point {
//   x: number;
//   y: number;
// }

// function tsDemo(data: Point) {
//   console.log("123");
//   return Math.sqrt(data.x ** 2 + data.y ** 2);
// }

// tsDemo({ x: 1, y: 123 });

//类
// class Person {
//   name = "dell";
//   getName() {
//     return this.name;
//   }
// }

// const person = new Person();
// console.log(person.getName());

// class Teacher extends Person {
//   getTeacherName() {
//     return "Teacher";
//   }

//   //重写父类方法
//   getName() {
//     return super.getName() + "lee"; //调用父亲 getName()方法
//   }
// }

// const teacher = new Teacher();
// console.log(teacher.getName());
// console.log(teacher.getTeacherName());

//private
// class Person {
//   private name: string; //相当于 public name : string
// }
// const person = new Person();
// person.name = "dell"; //报错 name为private只能在类内使用

//protected
// class Person {
//   protected name: string;
//   public setName(name: string): void {
//     this.name = name;
//   }
// }

// class Teacher extends Person {
//   public sayBy(): void {
//     console.log(this.name);
//   }
// }

// const teacher = new Teacher();
// teacher.setName("dell");
// teacher.sayBy();

//constructor
// class Person {
//   // 传统写法
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   // 简化写法
//   constructor(public name: string) {}
// }
// const person = new Person("dell");
// console.log(person.name);

//构造器的继承
// class Person {
//   constructor(public name: string) {}
// }

// class Teacher extends Person {
//   constructor(public age: number) {
//     super("dell");
//   }
// }

// const teacher = new Teacher(28);
// console.log(teacher.age);
// console.log(teacher.name);

//单例模式
// class Demo {
//   private static instance: Demo;
//   private constructor(public name: string) {}

//   static getInstance() {
//     if (!this.instance) {
//       //已经挂载 就返回对象
//       this.instance = new Demo("dell lee");
//     }
//     return this.instance;
//   }
// }

// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
// console.log(demo1.name);
// console.log(demo2.name);

// 抽象类 不可实例只能继承
abstract class Geom {
  width: number;
  abstract getArea(): string;
}

class Circle extends Geom {
  getArea() {
    return "圆形面积宽";
  }
}

class Square {
  getArea() {
    return "正方形面积";
  }
}
class Triangle {
  getArea() {
    return "三角形面积";
  }
}

const circle = new Circle();
console.log(circle.getArea());
