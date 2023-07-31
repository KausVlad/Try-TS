interface ICar {
  make: string;
  model: string | number;
  year: number;
}

const car: ICar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1964,
};

type TypeCarModel = ICar['model'];

const carName: TypeCarModel = car.model; //! Цей фрагмент коду оголошує константу carName з типом ICar['model']. Він присвоює значення car.model змінній carName. Тип ICar['model'] вказує на конкретну властивість model інтерфейсу або типу ICar.

type TypeCarName2 = ICar['make'] | ICar['model'];

// const carName2 = car.model || car.make;
const carName2: TypeCarName2 = car.model || car.make;
