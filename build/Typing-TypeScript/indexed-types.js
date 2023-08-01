"use strict";
const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1964,
};
const carName = car.model; //! Цей фрагмент коду оголошує константу carName з типом ICar['model']. Він присвоює значення car.model змінній carName. Тип ICar['model'] вказує на конкретну властивість model інтерфейсу або типу ICar.
// const carName2 = car.model || car.make;
const carName2 = car.model || car.make;
//# sourceMappingURL=indexed-types.js.map