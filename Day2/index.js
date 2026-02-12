import { appendFileSync,writeFileSync,readFileSync } from "./readAndWriteFile.js";

writeFileSync("new.txt","hello this is new file");
readFileSync("new.txt");
appendFileSync("new.txt", " this data is appended")