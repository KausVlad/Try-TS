import fs from "fs";
const input = "Hello World from TypeScript";
const doneWritingToFile = (err) => {
    if (err)
        return console.log(err);
    console.log("File written successfully");
};
fs.writeFile("output.txt", input, doneWritingToFile);
//# sourceMappingURL=write-to-file.js.map