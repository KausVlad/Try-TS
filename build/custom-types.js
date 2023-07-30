"use strict";
const person = {
    name: 'KausGold',
    age: 30,
};
const person2 = {
    name: 'KausGold',
    age: 30,
    hairColor: 'black',
};
const person3 = {
    name: 'KausGold',
    age: 30,
};
//! const personHairColor: string | undefined = person2.hairColor;
const personHairColor = person2.hairColor || 'bald';
person.age = 40;
person3.hairColor = personHairColor;
console.log(person);
console.log(person2);
console.log(person3);
//# sourceMappingURL=custom-types.js.map