import fs from 'fs';

const makedir = (path) => {
    try {
        fs.mkdirSync(path);
        console.log("directory created");
    } 
    catch (err) {
        console.log("unable to make directory", err);
    }
};
makedir("./Day6")


const readdir = (path) => {
    try {
        const res = fs.readdirSync(path);
        console.log("successful", res);
    } 
    catch (err) {
        console.log("unable to read directory", err);
    }
};
readdir("./Day1")

const removedir = (path) => {
    try {
        fs.rmdirSync(path);
        console.log("directory removed");
    } 
    catch (err) {
        console.log("unable to remove directory", err);
    }
};

removedir("./Day6");
