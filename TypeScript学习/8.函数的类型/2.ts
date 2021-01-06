//可选参数
// function buildName(firstName:string,lastName?:string){
//     if(lastName){
//         return firstName+' '+lastName;
//     }
//     else{
//         return firstName;
//     }
// }


//参数默认值
function buildName1(firstName:string,lastName:string='Cat'){
    return firstName+' '+lastName;
}

let tomacat=buildName1('tom','Cat');
console.log(tomacat);

console.log(buildName1('dasds'));


//剩余参数
function push(array:any[],...items:any[]){
    items.forEach(function(item){
        array.push(item);
    })
}
let a=[];
push(a,1,2,3);
console.log(a);

//重载
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string{
    if(typeof x==='number'){
        return Number(x.toString().split("").reverse().join(""));
    }
    else if(typeof x==='string'){
        return x.split('').reverse().join('')
    }
}

