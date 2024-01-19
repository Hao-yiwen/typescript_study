"use strict";
class Test {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const a = new Test("1", 29);
a.age;
function change(argA) {
    if (typeof argA === "string") {
        return argA;
    }
    else {
        return argA[0];
    }
}
const adsa = [{ test: '12312' }];
