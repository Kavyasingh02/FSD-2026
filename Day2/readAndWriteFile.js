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
//writeFileSync("./example.txt","Hey There");

const readFileSync=path=>{
     try{
        const data=fs.readFileSync(path,"utf-8");
        console.log("data successfully read:", data);
    }
    catch(err){
        console.log("unable to read data", err);
    }
}
//readFileSync("./example.txt");

const appendFileSync=(path,data)=>{
    try{
        fs.appendFileSync(path,data);
        console.log("data appended");
        
    }
    catch(err){
        console.log("unable to append file", err);
        
    }
}
//appendFileSync("./example.txt","this data is appended");

export {appendFileSync,writeFileSync,readFileSync}