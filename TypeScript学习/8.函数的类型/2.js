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
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomacat = buildName1('tom', 'Cat');
console.log(tomacat);
console.log(buildName1('dasds'));
//剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);
