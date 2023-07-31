"use strict";
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return (a + b); //!Цей фрагмент коду перетворює змінну a в рядок, конкатенує його зі змінною b, а потім знову перетворює результат на рядок перед поверненням.
    }
    // return a.toString() + b.toString();
}
const result = combine('KausGold', 30);
//# sourceMappingURL=condtitional-types.js.map