const test: string = 'Hello World';

console.log(test);

function double(x: number): number {
  return x * 2;
}

function double2(x: number): void {
  console.log(x * 2);
}

const triple = (x: number) => x * 3;

let x = 10;
// x = 'Hello';
// let y;
let y: number;
y = 10;

let xFunc: (x: number) => number;
xFunc = (xx) => xx * 2;

const names: string[] = ['John', 'Paul', 'George', 'Ringo'];
const numbers: number[] = [1, 2, 3];
// const neverW = []; //! never type is not good
