// function isFish(animal:Cat|Fish){
//     if(typeof (animal as Fish).swim==='function'){
//         return true;
//     }
//     return false;
// }
//断言滥用的情况
function swim(animal) {
    animal.run();
}
var tom1 = {
    name: 'Tom',
    run: function () {
        console.log('dasd');
    }
};
swim(tom1);
