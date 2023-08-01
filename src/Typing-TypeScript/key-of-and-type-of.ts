const man = {
  name: "John",
  age: 10,
  hairColor: "black",
};

type TypeMan = typeof man; //! This code snippet creates a new type called typeFFF and assigns it the type of man. The typeof operator in TypeScript retrieves the type of a value or variable.

const a: number = 2;

type TypeA = typeof a;

type TypeManKey = keyof TypeMan; // union types of literal

// function getPropertyFromMan(man: TypeMan, key: string) {
//   return man[key];
// } // error

function getPropertyFromMan(man: TypeMan, key: TypeManKey) {
  return man[key];
}
