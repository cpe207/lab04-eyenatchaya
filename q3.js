function primeNumber(d) {
    if (d <= 1) {
        return "NO";
    }
    if (d === 2) {
        return "YES";
    }
    for (var i = 2; i <= Math.sqrt(d); i++) {
        if (d % i === 0) {
            return "NO";
        }
    }
    return "YES";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
