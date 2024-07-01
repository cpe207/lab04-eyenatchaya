function arrayStringify(c) {
    var x = "";
    for (var i = 0, y = c; i < y.length; i++) {
        var b = y[i];
        x += b.toString();
    }
    return x;
}
var c1 = [1, 2, 3];
var c2 = [10, 9, 8, 7, 6, 5];
var c3 = [];
console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));
module.exports = arrayStringify;
