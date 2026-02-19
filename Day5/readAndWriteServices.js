import fs from 'fs/promises';
import { json } from 'stream/consumers';

// export const readJsonFile=async(path)=>{
//    try{
//     const data=await fs.readFile(path,"utf-8");
//     console.log(JSON.parse(data));
//    }catch (err){
//     console.log("unable to read file",err);
//    }
// }
// readJsonFile("./students.json");
// const writeJsonFile=async(path,data)=>{
// try{
//     await fs.writeFile(path);
//     return data;
//    }catch (err){
//     console.log("unable to read file",err);
//    }
// }
 export const readJsonFile=async(path)=>{
    try{
 const data= await fs.readFile(path,"utf-8");
 console.log(data);
 
 return JSON.parse(data);
    }catch(err){
        console.log("Error ocuured",err);
        
    }
}