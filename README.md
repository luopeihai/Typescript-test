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

```
interface Point {
    x: number;
    y: number;
}

const point: Point = {
    x: 3,
    y: 4
};
```

**基础类型**

基础类型:null, undefined, symbol, boolean, void

```
const count: number  = 123 //数字类型

const teacherName: string = 'Dell' //字符串类型

let valueStringOrNumber : string | number = 123 //valueStringOrNumber 为string 或者 number 类型


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

**类型注解和类型推断**

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
