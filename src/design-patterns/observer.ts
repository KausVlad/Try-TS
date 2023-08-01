interface IObserver<T> {
  update(value: T): void;
}

class Subject {
  private observers: IObserver<string>[] = [];
  private value: string = "";

  public addObserver(observer: IObserver<string>) {
    this.observers.push(observer);
  }

  public setValue(newValue: string) {
    this.value = newValue;
    this.observers.forEach((observer) => observer.update(newValue));
  }
}

class LogObserver implements IObserver<string> {
  update(value: string) {
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
