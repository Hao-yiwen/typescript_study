

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(p.x + " " + p.y);
}

const point = {x: 1, y: 10};

logPoint(point);