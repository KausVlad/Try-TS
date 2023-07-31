"use strict";
const animal = {
    name: 'KausGold',
    age: 30,
    getName() {
        return this.name;
    },
};
class User {
    name;
    age;
    hairColor;
    constructor(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
    sayHelloTo(nameY) {
        console.log(`Hello ${nameY} from ${this.name}`);
    }
    sayHelloReturn() {
        return `Hello ${this.name}`;
    }
}
const user = new User('KausGold', 30, 'black');
console.log(user.sayHello());
//# sourceMappingURL=class-basics.js.map