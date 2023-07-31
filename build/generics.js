"use strict";
class Queue {
    items;
    constructor(startingValue) {
        this.items = [startingValue];
    }
    add(newItem) {
        this.items.push(newItem);
    }
    remove() {
        return this.items.shift();
    }
}
const stringQueue = new Queue('ssss');
stringQueue.add('KausGold');
// stringQueue.add(4); // Error
console.log(stringQueue.remove());
const numberQueue = new Queue(4);
numberQueue.add(30);
console.log(numberQueue.remove());
function print(value) {
    console.log('value:', value);
}
print('KausGold');
//# sourceMappingURL=generics.js.map