//申明jquery

// declare var jQuery:(selector:string)=>any;

// jQuery('#foo');
// $

// declare let jQuery:(selector:string)=>any;

declare enum Directions{
    Up,
    Down,
    Left,
    Right
}

enum dis{
    UP=1,
    Down=2,
    Left=3,
    Right=4
}

let directions=[dis.UP,dis.Down,dis.Left,dis.Right]
console.log(directions);
