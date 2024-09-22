"use strict";
const c1 = { a: "a", b: 1, c: "c" };
const map1 = new Map();
map1.set("foo", 123);
const person1 = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});
person1.on("firstNameChanged", (v) => {
    console.log(`firstName was changed to ${v.toUpperCase()}`);
});
class Base {
    constructor() {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        super();
        // Prints a wrong value in ES5; throws exception in ES6
        console.log(this.k);
    }
}
