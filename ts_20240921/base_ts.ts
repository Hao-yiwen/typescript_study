"use strict";

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

type User2 = {
  name: string;
  id: number;
};

const user2: User2 = {
  name: "Hayes",
  id: 0,
};

// 可选继承user2
const user3: Partial<User2> = {
  name: "Hayes",
};

function greet(person: string, date: Date) {
  console.log(
    "Hello ".concat(person, ", today is ").concat(date.toDateString(), "!")
  );
}
greet("Maddison", new Date());

async function getTestNum(): Promise<number> {
  return Promise.resolve(123);
}

type num1 = number;

function testNum2(obj: { num: number }): void {
  console.log(obj.num);
}

let someValue: string | number | boolean;

if (Math.random() > 0.5) {
  someValue = 123;
} else if (Math.random() > 0.3) {
  someValue = "123";
} else {
  someValue = true;
}

console.log(someValue);

interface User3 {
  name: "a" | "b" | "c";
  year: number;
}

let user4: User3 = {
  name: "a",
  year: 123,
};

if (user4.name == "a") {
  console.log(user4.year);
}

let user5: "a" | "b" | "c" = "a";

if (user5 == "a") {
  console.log(user5);
}

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };

// handleRequest(req.url, req.method as "GET");

let user6: never;

function Person(this: any, name: string, age: number) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`你好，我是 ${this.name}，我今年 ${this.age} 岁。`);
};

const person = new (Person as any)("张三", 30);
person.sayHello(); // 输出：你好，我是 张三，我今年 30 岁。

console.log(Date());

// interface CallOrConstruct {
//   new (name: string): any;
//   (name: string): any;
// }

// function fn(ctor: CallOrConstruct) {
//   return ctor("hello");
// }

function testFuncv1(this: any, name: string): any {
  this.name = name;
}

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

const Example: CallOrConstruct = (function () {
  function CallOrConstruct(this: any, arg?: any): any {
    if (this instanceof CallOrConstruct) {
      // 作为构造函数调用
      return new Date(arg);
    } else {
      // 作为普通函数调用
      return arg !== undefined ? arg.toString() : "默认字符串";
    }
  }
  return CallOrConstruct;
})() as CallOrConstruct;

console.log(new Example("2021-01-01"));

function TestClass(
  this: { name: string; age: number },
  name: string,
  age: number
) {
  this.name = name;
  this.age = age;
}

const obj = { name: "Test", age: 30 };
TestClass.call(obj, "John", 40); // 使用显式的 `this` 参数，确保正确调用

console.log(obj);

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);   // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__ === null);   // true
console.log(Object.getPrototypeOf(arr), Object.getPrototypeOf(arr) === Array.prototype); // true

console.log(TestClass);

function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
// 你如何声明函数并不重要；
// JavaScript 中的函数总有一个默认的
// 原型属性——有一个例外：
// 箭头函数没有默认的原型属性：
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
