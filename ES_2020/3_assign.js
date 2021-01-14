let a={
    a:'1',
    b:'2'
}

let b={}

let c=Object.assign(b,a);

console.log(b);

b.a=3;

console.log(a,b,c);
