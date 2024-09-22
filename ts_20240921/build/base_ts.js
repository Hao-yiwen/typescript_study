"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    name: "Hayes",
    id: 0,
};
const user2 = {
    name: "Hayes",
    id: 0,
};
// 可选继承user2
const user3 = {
    name: "Hayes",
};
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
function getTestNum() {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(123);
    });
}
function testNum2(obj) {
    console.log(obj.num);
}
let someValue;
if (Math.random() > 0.5) {
    someValue = 123;
}
else if (Math.random() > 0.3) {
    someValue = "123";
}
else {
    someValue = true;
}
console.log(someValue);
let user4 = {
    name: "a",
    year: 123,
};
if (user4.name == "a") {
    console.log(user4.year);
}
let user5 = "a";
if (user5 == "a") {
    console.log(user5);
}
const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method as "GET");
let user6;
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log(`你好，我是 ${this.name}，我今年 ${this.age} 岁。`);
};
const person = new Person("张三", 30);
person.sayHello(); // 输出：你好，我是 张三，我今年 30 岁。
console.log(Date());
// interface CallOrConstruct {
//   new (name: string): any;
//   (name: string): any;
// }
// function fn(ctor: CallOrConstruct) {
//   return ctor("hello");
// }
function testFuncv1(name) {
    this.name = name;
}
const Example = (function () {
    function CallOrConstruct(arg) {
        if (this instanceof CallOrConstruct) {
            // 作为构造函数调用
            return new Date(arg);
        }
        else {
            // 作为普通函数调用
            return arg !== undefined ? arg.toString() : "默认字符串";
        }
    }
    return CallOrConstruct;
})();
console.log(new Example("2021-01-01"));
function TestClass(name, age) {
    this.name = name;
    this.age = age;
}
const obj = { name: "Test", age: 30 };
TestClass.call(obj, "John", 40); // 使用显式的 `this` 参数，确保正确调用
console.log(obj);
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__ === null); // true
console.log(Object.getPrototypeOf(arr), Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(TestClass);
function doSomething() { }
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
// 你如何声明函数并不重要；
// JavaScript 中的函数总有一个默认的
// 原型属性——有一个例外：
// 箭头函数没有默认的原型属性：
const doSomethingFromArrowFunction = () => { };
console.log(doSomethingFromArrowFunction.prototype);
