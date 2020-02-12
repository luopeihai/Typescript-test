# Typescript 学习

## 全局环境:

- node v12.13.0
- npm 6.12.0
- typescript 3.6.4(.ts 编译为 .js)
- ts-node 8.4.1 (直接的运行.ts 代码)

## 开发工具:vscode

开发工具安装插件:

- prettier(.ts 格式化)
- Markdown All in One(.md markdown 支持)
- Markdown Preview Github Styling(.md 预览)

## 编译 demo.ts 指令:

```
- tsc demo.ts (demo.ts 编译成 demo.js)
  node demo.js
-  或 通过 ts-node 方式
ts-node demo.js
```

## 语法

**自定义类型**

interface 和 type 相类似，但并不完全一致 type(类型别名) 区别于 interface,为 type 可以定义变量 or 对象,而 interface 只能定义对象

```
  type circle = string
  type circleObj = {
      x:string;
      y:number
  }
```

interface 代码

```
interface Person {
  // readonly name: string; //readonly为只读
  name: string;
  age?: number; //为number 类型 可不存在
  [propName: string]: any; //允许多出字符串 类型属性
  say(): string; //属性可以是方法 返回为string类型
}

//获取person name属性
const getPersonName = (person: Person): void => {
  console.log(person.name);
};

//设置 person name属性
const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const person = { //实例化
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
};

//调用函数
getPersonName(person);
setPersonName(person, 'lee');
```

interface 继承

```
//接上面的代码
interface Teacher extends Person {
  teach(): string;
}

//设置 teacher name属性
const setTeacherName = (person: Teacher, name: string): void => {
  person.name = name;
};

const teacher = { //实例化
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
  teacher(){
      return 'I am teacher'
  }
};
setTeacherName(teacher,'tom')

```

**基础类型**

基础类型:null, undefined, symbol, boolean, void

```
const count: number  = 123 //数字类型

const teacherName: string = 'Dell' //字符串类型

let valueStringOrNumber : string | number = 123 //为string 或者 number 类型


```

**对象类型**

```
   class Person {} //定义person对象
   const dell: Person = new Person(); //dell 继承 Person

   const teacher: {
        name: string;
        age: number;
    } = {
        name: 'Dell',
        age: 18
    };

    const numbers: number[] = [1, 2, 3]; //数字型数组

    /*
      函数返回类型为数字
      函数接受参数为字符串
    */
    const getTotal: (str:string) => number = (str) => {
         return parseInt(str,10)
    };

    //getTotal 函数也可以写成
    const getTotal = (str:string):number =>{
        return parseInt(str,10)
    }

```

**类型注解和推断**

- type annotation 类型注解, 我们来告诉 TS 变量是什么类型(明确告诉)
  ```
  let count: number = 123 //我们告诉TS 变量类型
  ```
- type inference 类型推断, TS 会自动的去尝试分析变量的类型(需要 ts 推断)

  ```
  const firstNumber = 1;
  const secondNumber = 2;
  //通过变量推断结果给整数类型
  const total = firstNumber + secondNumber;

    function getTotal(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
    }
    //通过函数整数相加判断类型
    const total = getTotal(1, 2);
  ```

**函数相关类型**

```
 //函数返回类型为整数
 function add(first: number, second: number): number {
   return first + second;
 }

 //函数不返回函数类型
 function sayHello(): void {
   console.log('hello');
 }

//函数永远执行不了
function errorEmitter(): never {
    throw new Error();
    console.log("执行不到")
}

/*
 定义函数参数为json 类型定义
 first ,second 都为number 类型
 函数返回也为number
*/
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total = add({ first: 1, second: 2 });

function getNumber({ first }: { first: number }) {
  return first;
}
const count = getNumber({ first: 1 });

```

**注意上述代码 定义{first,second} : { first: number; second: number } 定义格式中结束是";"不是 json 结果**

**数组**

- 数组包含多类型

  ```
   const arr: (number | string)[] = [1, '2', 3]  //数组包括number和string类型
  ```

- 纯类型数组

  ```
  const stringArr: string[] = ['a', 'b', 'c'] //纯字符串类型数组

  const undefinedArr: undefined[] = [undefined] //纯undefined数组
  ```

- 数组包含对象

  ```
  // type alias 类型别名 使用
  type User = { name: string; age: number };
  const objectArr: User[] = [{
    name: 'dell',
    age: 28
   }];
  class Teacher {
    name: string;
    age: number;
  }
  //数组子项为 Teacher 对象
  const objectArr: Teacher[] = [
  new Teacher(),
  {
  name: 'dell',
  age: 28
  }];
  ```

  **元组**

与数组不同 元组每列的数据类型明确

```
  const teacherInfo: [string, string, number] = ['Dell', 'male', 18]; //指定每个子项类型

  const teacherList: [string, string, number][] = [['dell', 'male', 19], ['sun', 'female', 26], ['jeny', 'female', 38]];

```


**类**

类的使用
```
class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

const person = new Person()
console.log(person.getName())
```
类继承
```
// 接上面代码
class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }

  //重写父类方法
  getName() { 
    return super.getName() + 'lee'; //调用父亲 getName()方法
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
```

**类的访问类型和构造**

类的访问类型有:private, protected, public
- 类中属性默认为public访问类型,允许在类的内外被调用
  ```
  class Person {
    name:string //相当于 public name : string
  }
  ```
- private 允许在类内被使用
  
  ```
  class Person {
    private name:string 
  }
  const person = new Person()
  person.name = 'dell';//报错  name为private只能在类内使用
  ```
- protected 允许在类内及继承的子类中使用
  ```
  class Person {
    protected name:string 
  }

  class Teacher extends Person{
     public sayBy:void () {
         console.log(this.name)
     }
  }

  const teacher = new Teacher()
  console.log(teacher.sayBy())
  
  ```
* 构造
  ```
  class Person {
    // 传统写法
    // public name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // 简化写法
    constructor(public name: string) {}
  }
  const person = new Person("dell");
  console.log(person.name);
  ```  
  构造器的继承
  ```
  class Person {
  constructor(public name: string) {}
  }

  class Teacher extends Person {
    constructor(public age: number) {
      super('dell'); //父类构造必须调用
    }
  }

  const teacher = new Teacher(28);
  console.log(teacher.age);
  console.log(teacher.name);
  ```

