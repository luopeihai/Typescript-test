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
const count: number = 123 //数字类型
const teacherName: string = 'Dell' //字符串类型
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

    // 函数返回类型为数字
    const getTotal: () => number = () => {
         return 123;
    };

```
