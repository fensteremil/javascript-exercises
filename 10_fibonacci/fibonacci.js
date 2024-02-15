const fibonacci = function(n) {
    n = +n;
    if (n >= 0) {
        return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
