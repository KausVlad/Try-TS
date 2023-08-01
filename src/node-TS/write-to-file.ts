import fs from "fs";

const input: string = "Hello World from TypeScript";

const doneWritingToFile = (err: NodeJS.ErrnoException | null): void => {
  if (err) return console.log(err);
  console.log("File written successfully");
};

fs.writeFile("output.txt", input, doneWritingToFile);
