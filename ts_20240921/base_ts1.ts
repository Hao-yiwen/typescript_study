function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

console.log(s, n, u);

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'number'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);

// 泛形约束
function longest<Type extends { length: number }>(a: Type, b: Type) {
  a.length > b.length ? a : b;
}

longest([1, 2], [1, 2, 3]);
longest("alice", "bob");
longest([1, 2], []); // Error
// longest(10, 100); // Error

function f(n: number = 10) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}

f(42.0);
f();

let aaa: unknown = 30;

if (typeof aaa === "number") {
  if (aaa > 40) {
    console.log("aaa is greater than 40");
  }
}

type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};

interface Shape {}

interface PaintOptions {
  shape: Shape;
  readonly xPos?: number;
  yPos?: number;
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
}

function paintShape1(paint: PaintOptions) {
  //   paint.xPos ++;
}

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

// readonlyPerson.age++;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({
  dasdascolour: "red",
  width: 100,
} as SquareConfig);

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
  //   color: number;
}

type ColorfulCircle = Colorful & Circle;
type ColorfulCircle1 = Colorful | Circle;

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

const cc1: ColorfulCircle1 = {
  color: "red",
  radius: 42,
};

interface Person1 {
  name: string;
}

interface Person2 {
  name: number;
}

type Staff = Person1 & Person2;

declare const staffer: Staff;
staffer.name;

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
