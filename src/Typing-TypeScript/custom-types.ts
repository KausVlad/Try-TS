// const person: object = {
//   name: 'KausGold',
//   age: 30,
// }
type TypePerson = {
  name: string;
  age: number;
  hairColor?: string;
};

const person: { name: string; age: number } = {
  name: 'KausGold',
  age: 30,
};

const person2: TypePerson = {
  name: 'KausGold',
  age: 30,
  hairColor: 'black',
};

const person3: TypePerson = {
  name: 'KausGold',
  age: 30,
};

//! const personHairColor: string | undefined = person2.hairColor;
const personHairColor: string = person2.hairColor || 'bald';

person.age = 40;

person3.hairColor = personHairColor;

console.log(person);
console.log(person2);
console.log(person3);
