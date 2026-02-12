import fs from 'fs/promises';

 export const writeFile=async(path,data)=>{
     try{
await fs.writeFile(path,data);
console.log("data hve been wriiten successfully");

     }
     catch(err){
        console.log("unable to write data", err); 
     }
}
//writeFile("example.txt","data written through async");
export const readFile=async(path)=>{
     try{
const data=await fs.readFile(path,"utf-8");
console.log("data hve been readed successfully");

     }
     catch(err){
        console.log("unable to read data", err); 
     }
}
//readFile("./example.txt");


 export const appendFile=async(path,data)=>{
     try{
const data=await fs.appendFile(path," This is appended data");
console.log("data hve been appended successfully");

     }
     catch(err){
        console.log("unable to appaend data", err); 
     }
}
//appendFile("./example.txt");