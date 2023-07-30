interface IHuman {
  name: string;
  age: number;
  getName(): string;
}

const animal: IHuman = {
  name: 'KausGold',
  age: 30,
  getName(): string {
    return this.name;
  },
};

class User {
  private name: string;
  private age: number;
  private hairColor: string;
  constructor(name: string, age: number, hairColor: string) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }

  sayHelloTo(nameY: string) {
    console.log(`Hello ${nameY} from ${this.name}`);
  }

  sayHelloReturn(): string {
    return `Hello ${this.name}`;
  }
}

const user = new User('KausGold', 30, 'black');

console.log(user.sayHello());
