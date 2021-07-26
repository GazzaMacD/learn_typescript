/* Direct type delcaration */
const person = {
    firstName: "Hobbit",
    lastName: "Troll",
    age: 56,
};
const person2 = {
    firstName: "Hobbit",
    lastName: "Troll",
    age: 56,
};
const person3 = {
    firstName: "Hobbit",
    lastName: "Troll",
    age: 56,
};
const dog = {
    name: "Chuck",
};
const sperson = {
    lastName: "Troll",
};
function personToLower(person) {
    var _a;
    const personCpy = Object.assign({}, person);
    (_a = personCpy.firstName) === null || _a === void 0 ? void 0 : _a.toLowerCase(); // this will throw an error as first name is possibly undefined so use --> ?. syntax
    personCpy.lastName.toLowerCase();
    return personCpy;
}
const loweredSPerson = personToLower(sperson);
