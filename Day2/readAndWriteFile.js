import fs from 'fs';
// console.log(fs);

const writeFileSync=(path,data)=>{
    try{
        fs.writeFileSync(path,data);
console.log("data successfully written");

    }
    catch(err){
        console.log("unable to write data", err);
    }
}
writeFileSync("./example.txt","Hey There");

const readFileSync=path=>{
     try{
        fs.readFileSync(path);
        console.log("data successfully read");
    }
    catch(err){
        console.log("unable to read data", err);
    }
}
readFileSync("./example.txt");