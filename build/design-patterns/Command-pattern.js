"use strict";
class Counter {
    count = 0;
    setValue(newValue) {
        this.count = newValue;
    }
    getValue() {
        return this.count;
    }
}
class IncrementCommand {
    counter;
    constructor(counter) {
        this.counter = counter;
    }
    execute() {
        this.counter.setValue(this.counter.getValue() + 1);
    }
    undo() {
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
//# sourceMappingURL=Command-pattern.js.map