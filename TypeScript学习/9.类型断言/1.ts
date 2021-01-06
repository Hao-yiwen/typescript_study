interface Cat{
    name:string;
    run():void;
}

interface Fish{
    name:string;
    swim():void;
}

// function isFish(animal:Cat|Fish){
//     if(typeof (animal as Fish).swim==='function'){
//         return true;
//     }
//     return false;
// }

//断言滥用的情况
function swim(animal:Cat|Fish){
    (animal as Cat).run();
}

const tom1:Cat={
    name:'Tom',
    run(){
        console.log('dasd');
    }
}
swim(tom1);

//将父类断言为更为具体的子类
class ApiError extends Error{
    code:number=0;
}

class HttpError extends Error{
    statusCode:number=200;
}

function isApiError(error:Error){
    if(typeof(error as ApiError).code==='number'){
        return true;
    }
    return false;
}

//将任何一个类型断言为any
const  foo:number=1;
// foo.length=1;
(window as any).foo=1;

