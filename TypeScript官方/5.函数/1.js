//  let myAdd=function(x:number,y:number):number{   //推断类型
//      return x+y;
//  }
// //完整函数类型
// let myAdd:(x:number,y:number)=>number=function(x:number,y:number){
//     return x+y;
// }
// //可选参数
// function buildName(firstName:string,lastName?:string){
//     return firstName+' '+lastName;
// }
// let result1 = buildName("Bob");  // works correctly now
// // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right
//默认参数
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "smith"; }
    return firstName + " " + lastName;
}
console.log(buildName1("Bob"));
console.log(buildName1("Bob", "dasd"));
console.log(buildName1("Bob", undefined));
