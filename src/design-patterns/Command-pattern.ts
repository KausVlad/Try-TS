interface ICommand {
  execute(): void;
  undo(): void;
}

class Counter {
  private count: number = 0;

  setValue(newValue: number) {
    this.count = newValue;
  }

  getValue(): number {
    return this.count;
  }
}

class IncrementCommand implements ICommand {
  private counter: Counter;
  constructor(counter: Counter) {
    this.counter = counter;
  }
  execute(): void {
    this.counter.setValue(this.counter.getValue() + 1);
  }
  undo(): void {
    this.counter.setValue(this.counter.getValue() - 1);
  }
}

const counter = new Counter();

const incCommand = new IncrementCommand(counter);
incCommand.execute();
console.log(counter.getValue());
incCommand.execute();
incCommand.execute();
incCommand.execute();
console.log(counter.getValue());
incCommand.undo();
console.log(counter.getValue());
