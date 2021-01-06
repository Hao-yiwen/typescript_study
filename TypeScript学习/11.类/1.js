var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var adas = new Animal('Jack');
console.log(adas.name); // Jack
adas.name = 'Tom';
