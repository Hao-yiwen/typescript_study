// function getCacheData(key:string):any{
//     return (window as any).cache[key];
// }

// interface Cat{
//     name:string,
//     run():void;
// }

// const tomx:Cat=getCacheData('tom');
// tomx.run();

interface Animal{
    name:string
}

interface Cat{
    name:string;
    run():void;
}

const animal:Cat={
    name:'tom',
    run(){
        
    }
}

let tomy:Animal=animal;


//类型声明只能想下兼容即范围大的包含范围小的

//类型断言则是只需要相互之间兼容即可
// 类型断言常用的断言情况有以下几种：
//     1、父类断言为子类(子类能够用类型声明直接赋值为父类)
//     2.联合类型段眼位具体类型
//     3.any断言为更为具体的类型
//     4.任何类型断言为any类型