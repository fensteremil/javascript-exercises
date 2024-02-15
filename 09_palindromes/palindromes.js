const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
