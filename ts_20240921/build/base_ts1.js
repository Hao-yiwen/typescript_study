"use strict";
function firstElement(arr) {
    return arr[0];
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
console.log(s, n, u);
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'number'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);
// 泛形约束
function longest(a, b) {
    a.length > b.length ? a : b;
}
longest([1, 2], [1, 2, 3]);
longest("alice", "bob");
longest([1, 2], []); // Error
// longest(10, 100); // Error
function f(n = 10) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
}
f(42.0);
f();
let aaa = 30;
if (typeof aaa === "number") {
    if (aaa > 40) {
        console.log("aaa is greater than 40");
    }
}
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
function paintShape({ shape, xPos = 0, yPos = 0 }) {
    console.log("x coordinate at", xPos);
}
function paintShape1(paint) {
    //   paint.xPos ++;
}
let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
// works
let readonlyPerson = writablePerson;
// readonlyPerson.age++;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
let mySquare = createSquare({
    dasdascolour: "red",
    width: 100,
});
const cc = {
    color: "red",
    radius: 42,
};
const cc1 = {
    color: "red",
    radius: 42,
};
staffer.name;
function identity(arg) {
    return arg;
}
let myIdentity = identity;
