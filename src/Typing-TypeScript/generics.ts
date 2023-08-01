class Queue<T> {
  private items: T[];
  constructor(startingValue: T) {
    this.items = [startingValue];
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  remove(): T | undefined {
    return this.items.shift();
  }
}

const stringQueue = new Queue<string>('ssss');
stringQueue.add('KausGold');
// stringQueue.add(4); // Error
console.log(stringQueue.remove());

const numberQueue = new Queue<number>(4);
numberQueue.add(30);
console.log(numberQueue.remove());

function print<T>(value: T): void {
  console.log('value:', value);
}

print<string>('KausGold');
