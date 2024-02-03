const removeFromArray = function(array, ...entries) {
    // for (const entry of entries) {
    //     const index = array.indexOf(entry);
    //     if (index > -1) array.splice(index, 1);
    // }
    // return array;
    return array.filter(value => !entries.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
