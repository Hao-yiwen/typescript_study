// let arr=[1,2,3,4,5];
// let a=arr.slice();

// a[3]='dasdas';

// console.log(arr);
// console.log(a);

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 500 * i);
// }

// function f(x){
//     if(true){
//         let x=100;
//     }
// }

// const obj={
//     a:1,
//     b:2
// }

// const obj1={
//     ...obj
// }

// obj1.a=3;
// console.log(obj===obj1);

// function name(a) {
//     return function dasd(b) {
//         return c+a
//     }
// }

function a(x){
    return function b(y){
        x=x+3;
        return x*y;
    }
}

console.log(a(1)(2));