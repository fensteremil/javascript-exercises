const findTheOldest = function(array) {
    return array.reduce((person, currentPerson) => {
        const oldestAge = calcAge(person.yearOfBirth, person.yearOfDeath);
        const currentAge = calcAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge > currentAge ? person : currentPerson;
    }, {});
};

function calcAge(birth, death) {
    let age = 0;
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
