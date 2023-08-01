"use strict";
class Subject {
    observers = [];
    value = "";
    addObserver(observer) {
        this.observers.push(observer);
    }
    setValue(newValue) {
        this.value = newValue;
        this.observers.forEach((observer) => observer.update(newValue));
    }
}
class LogObserver {
    update(value) {
        console.log("value:", value);
    }
}
const observer = new LogObserver();
const observer2 = new LogObserver();
const subject = new Subject();
subject.addObserver(observer);
subject.addObserver(observer2);
subject.setValue("1337");
// subject.setValue("13371");
//# sourceMappingURL=observer.js.map