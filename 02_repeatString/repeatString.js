const repeatString = function(string = 'hey', count) {
    let result = '';

    if (count < 0) {
        return 'ERROR';
    }
    else {
        for (let i = 0; i < count; i++)
        {
            result += string;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
