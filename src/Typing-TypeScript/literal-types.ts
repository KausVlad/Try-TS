let f: "Hello" | "hi" | "bye" = "Hello";
// f = "wqeew"; //! Type '"wqeew"' is not assignable to type "Hello" | "hi" | "bye"
f = "hi";

type TypeColumnLabel = "1" | "2" | "3";
type TypeRowLabel = "A" | "B" | "C";

type TypeBM = `${TypeRowLabel}${TypeColumnLabel}`; // template literals

const newMove: TypeBM = "B2";

const userRowInput = "Hello1";
const userColumnInput = "Good";

// function attackSquare(row: TypeRowLabel, column: TypeColumnLabel) {}
function attackSquare(move: TypeBM) {}

function isRowLabel(str: string): str is TypeRowLabel {
  return ["A", "B", "C"].includes(str);
}

function isColumnLabel(str: string): str is TypeColumnLabel {
  return ["1", "2", "3"].includes(str);
}

function isBtlShMove(str: string): str is TypeBM {
  const [row, column] = str.split("");
  return isRowLabel(row) && isColumnLabel(column);
}

// if (isRowLabel(userRowInput) && isColumnLabel(userColumnInput)) {
//   attackSquare(userRowInput, userColumnInput);
// }

if (isBtlShMove(newMove)) {
  attackSquare(newMove);
}
