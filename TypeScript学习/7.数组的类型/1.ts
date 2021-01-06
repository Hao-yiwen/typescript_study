let fibonacci:number[]=[1,1,2,3,5]

// fibonacci.push('8')

// let fibonacci:string[]=[1,'2',33,1]

let abs:Array<number>=[1,1,2,3,5];

// 用接口表示数组
interface NumberArray{
    [dasd:number]:number;
}

let dasdad:NumberArray=[12,3,4,4]

function sum(){
    // let args:number[]=arguments;
    let args:{
        [index:number]:number;
        length:number;
        callee:Function;
    }=arguments;
}

function su1m(){
    let args:IArguments=arguments;
}

let list:any[]=['dasd',25,{website:'dasdasdas'}]