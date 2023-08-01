"use strict";
let f = "Hello";
// f = "wqeew"; //! Type '"wqeew"' is not assignable to type "Hello" | "hi" | "bye"
f = "hi";
const newMove = "B2";
const userRowInput = "Hello1";
const userColumnInput = "Good";
// function attackSquare(row: TypeRowLabel, column: TypeColumnLabel) {}
function attackSquare(move) { }
function isRowLabel(str) {
    return ["A", "B", "C"].includes(str);
}
function isColumnLabel(str) {
    return ["1", "2", "3"].includes(str);
}
function isBtlShMove(str) {
    const [row, column] = str.split("");
    return isRowLabel(row) && isColumnLabel(column);
}
// if (isRowLabel(userRowInput) && isColumnLabel(userColumnInput)) {
//   attackSquare(userRowInput, userColumnInput);
// }
if (isBtlShMove(newMove)) {
    attackSquare(newMove);
}
//# sourceMappingURL=literal-types.js.map