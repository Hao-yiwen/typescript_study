//申明jquery
var dis;
(function (dis) {
    dis[dis["UP"] = 1] = "UP";
    dis[dis["Down"] = 2] = "Down";
    dis[dis["Left"] = 3] = "Left";
    dis[dis["Right"] = 4] = "Right";
})(dis || (dis = {}));
var directions = [dis.UP, dis.Down, dis.Left, dis.Right];
console.log(directions);
