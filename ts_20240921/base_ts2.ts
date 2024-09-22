class Test {
  zeroValue: string;
  add: (x: number, y: number) => number;

  constructor() {
    this.zeroValue = "zero value";

    this.add = function (x: number, y: number) {
      return x + y;
    };
  }
}

function testFuncv1(this: any, name: string): any {
  this.name = name;

  this.sayHello = this.sayHello.bind(this);
}

testFuncv1.prototype.sayHello = function () {
  console.log(`你好，我是 ${this.name}，我今年 ${this.age} 岁。`);
};

const instance1 = new (testFuncv1 as any)("张三");
const instance2 = new (testFuncv1 as any)("李四");

console.log(instance1.sayHello === instance2.sayHello);

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
    this.zeroValue = zeroValue;

    this.add = add;
  }
}

let myGenericNumber = new GenericNumber<number>(0, function (x, y) {
  return x + y;
});

interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity("dsadas");

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m");

interface Container<T extends HTMLElement, U extends HTMLElement[]> {
  element: T;
  children: U;
}

// 重载签名
function create(): Container<HTMLDivElement, HTMLDivElement[]>;
function create<T extends HTMLElement>(element: T): Container<T, T[]>;
function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;

// 实现签名
function create<
  T extends HTMLElement = HTMLDivElement,
  U extends HTMLElement = HTMLDivElement
>(element?: T, children?: U[]): Container<T, U[]> {
  if (element && children) {
    return { element, children };
  } else if (element) {
    return { element, children: [] as U[] };
  } else {
    return {
      element: new HTMLDivElement() as unknown as T,
      children: [] as U[],
    };
  }
}

create();

create(new HTMLDivElement());

// 协变
class Animal {
  name: string = "";
}

class Dog extends Animal {
  breed: string = "";
}

let animal: Animal[] = [new Animal(), new Animal()];

let dog: Dog[] = [new Dog(), new Dog()];
animal = dog;

animal.push(new Animal());

let dog1 = dog[1];

type Point = { x: number; y: number };
type P = keyof Point;

let p: P = "x";

let p1: P = "y";

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

function f() {
  return { x: 10, y: 3 };
}

type P1 = ReturnType<typeof f>;

type Person3 = { age: number; name: string; alive: boolean };

type I2 = Person3[keyof Person3];

type key = "age";

type Age = Person3[key];
