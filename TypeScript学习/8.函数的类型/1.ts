// function sum(x,y){
//     return x+y;
// }

// function sum(x:number,y:number):number{
//     return x+y;
// }

// sum(1,2);

let mySum:(x:number,y:number)=>number=function(x:number,y:number):number{
    return x+y;
}

//用接口定义函数的形状
interface SearchFunc{
    (source:String,substring:string):Boolean;
}

let mySearch:SearchFunc;
mySearch=function(source:string,substring:string){
    return source.search(substring)!==-1;
}


