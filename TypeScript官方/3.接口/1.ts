// interface LabeledValue {
//     label: string;
//   }
  
//   function printLabel(labeledObj: LabeledValue) {
//     console.log(labeledObj.label);
    // console.log(labeledObj.size);
    
//   }
  
//   let myObj = ;
//   printLabel({ size: 10, label: "Size 10 Object" });

// interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
  
//   function createSquare(config: SquareConfig): { color: string; area: number } {
//     // ...
//     return 
//   }
  
//   let mySquare = createSquare({ color: "red", width: 100 })


// 函数使用接口

interface Abc{
    (a:string):boolean
}

let abs:Abc;
abs=function(c){
    return true;
}

//可索引的类型
interface Arrays{
    [i:string]:string
}

let myarr:Arrays;
myarr=['dasd','dasdas'];