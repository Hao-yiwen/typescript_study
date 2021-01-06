//简单例子
// interface Person{
//     name:string;
//     age:number;
// }

// let tom:Person={
//     name:'tom',
//     age:32,
//     // gender:'modle's
// }

//可选属性
interface Person{
    name:string;
    age?:number;
}

let tom:Person={
    name:'tom'
}

interface Person1{
    name:string,
    age?:Number
}

let ads:Person1={
    name:'tom',
    age:321,
    // gender:'dasd'
}


//任意属性
interface Person2{
    name:string;
    age?:number;
    [propName:string]:string |number;
}

let adads:Person2={
    name:'TDAS',
    // DSAD:'ds',
    // sadsa:1231,
    age:23
    // 123:'dasd's
}

//只读属性
interface Person3{
    readonly id:number;
    name:string;
    age?:number
}

let das:Person3={
    id:31,
    name:'YTJD',
    age:1
    // gender:'mdads'
}

// das.name='dasd';