let obj={
    a:'',
    b:2
}

console.log(obj&&obj.a&&obj.b);
console.log(obj?.a?.b);

let a='';
let b=2;

let c=a||b;

console.log(c);

let d=a??b;
console.log(d);