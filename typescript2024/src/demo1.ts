type User ={
    name: string;
    age: number;
  }
  
  class Test {
    name: string;
    age: number;
  
    constructor(name:string, age:number){
      this.name = name;
      this.age = age;
    }
  }
  
  const a: User = new Test("1", 29);
  
  a.age
  
  type a = false | true
  
  type windowsState = "dasdas" | "dsdsadas";
  
  type lockedStates = "locaked" | "unlocked";
  
  type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
  
  
  function change(argA: string | string[]): string {
    if(typeof argA === "string") {
      return argA;
    } else {
      return argA[0];
    }
  }
  
  type StringArr = Array<string>;
  type NumberArr = Array<number>;
  type ObjectWithNameArray = {test: string}[]
  
  const adsa:ObjectWithNameArray = [{test: '12312'}]