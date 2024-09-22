"use strict";
class Test {
    constructor() {
        this.zeroValue = "zero value";
        this.add = function (x, y) {
            return x + y;
        };
    }
}
function testFuncv1(name) {
    this.name = name;
    this.sayHello = this.sayHello.bind(this);
}
testFuncv1.prototype.sayHello = function () {
    console.log(`你好，我是 ${this.name}，我今年 ${this.age} 岁。`);
};
const instance1 = new testFuncv1("张三");
const instance2 = new testFuncv1("李四");
console.log(instance1.sayHello === instance2.sayHello);
class GenericNumber {
    constructor(zeroValue, add) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}
let myGenericNumber = new GenericNumber(0, function (x, y) {
    return x + y;
});
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity("dsadas");
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// 实现签名
function create(element, children) {
    if (element && children) {
        return { element, children };
    }
    else if (element) {
        return { element, children: [] };
    }
    else {
        return {
            element: new HTMLDivElement(),
            children: [],
        };
    }
}
create();
create(new HTMLDivElement());
// 协变
class Animal {
    constructor() {
        this.name = "";
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.breed = "";
    }
}
let animal = [new Animal(), new Animal()];
let dog = [new Dog(), new Dog()];
animal = dog;
animal.push(new Animal());
let dog1 = dog[1];
let p = "x";
let p1 = "y";
function f() {
    return { x: 10, y: 3 };
}
