function combineX(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return ((a as string) + b) as string; //!Цей фрагмент коду перетворює змінну a в рядок, конкатенує його зі змінною b, а потім знову перетворює результат на рядок перед поверненням.
  }
  // return a.toString() + b.toString();
}

function combine<T1 extends string | number, T2 extends string | number>(
  a: T1,
  b: T2
): TypeCombinationResult<T1, T2> {
  if (typeof a === 'number' && typeof b === 'number') {
    return (a + b) as TypeCombinationResult<T1, T2>;
  } else {
    return ((a as string) + b) as string as TypeCombinationResult<T1, T2>;
  }
}
//! Цей фрагмент коду визначає функцію під назвою combine, яка приймає два аргументи a і b. Функція повертає значення типу TypeCombinationResult, який залежить від типів a і b.
//! Якщо як a, так і b є числами, функція додає їх разом і повертає результат як TypeCombinationResult типу number. В іншому випадку, якщо хоча б один з a або b є рядком, функція конкатенує їх і повертає результат як TypeCombinationResult типу string.
//! Тип TypeCombinationResult визначений як умовний тип, де якщо T1 є числом, перевіряється, чи є T2 також числом. Якщо так, то TypeCombinationResult є числом, в іншому випадку він є рядком.
type TypeCombinationResult<
  T1 extends string | number,
  T2 extends string | number
> = T1 extends number ? (T2 extends number ? number : string) : string;

const result = combine('KausGold', 30);
