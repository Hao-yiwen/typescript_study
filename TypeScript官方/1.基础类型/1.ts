//Boolean
let isDone: boolean = false;

//Number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let bigLiteral: bigint = 100n;

//String
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name },I'll be ${ age + 1 } years old next month.`;

//Array
let list: number[] = [1, 2, 3];

//Tuple--元组
let x:[string,number];
x=['hello',10];
// x=[10,'hello']   //errorß

//Enum
enum Color{Red1=1,Green2=2,Blue3=4};
let c:Color=Color.Green2;

//unknown
let notSure1: unknown = 4;
notSure1 = "maybe a string instead";

// OK, definitely a boolean
notSure1 = false;


//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)


//void
function warnUser(): void {
    console.log("This is my warning message");
}

//null和undefined
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。

//object
declare function create(o:object|null):void;

create({prop:0});
create(null);
// create(43);

//as
let someValue: any = "this is a string";

let strLength: number = someValue.length;
