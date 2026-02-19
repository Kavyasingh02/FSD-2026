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
//  export const readJsonFile=async(path)=>{
//     try{
//  const data= await fs.readFile(path,"utf-8");
//  console.log(data);
 
//  return JSON.parse(data);
//     }catch(err){
//         console.log("Error ocuured",err);
        
//     }
// }

export const readJsonFile = async (path) => {
    try {
        const fileData = await fs.readFile(path, "utf-8");
        return JSON.parse(fileData);
    } catch (error) {
        console.log("unable to read data " ,error);
    }
}
export const writeJsonFile = async(path, data)=>{
    let status=0, msg="";
    try {
        await fs.writeFile(path,JSON.stringify(data,2,null));
        status=200;
        msg="Data has been written successfully";       
    } catch (error) {
        status=500;
        msg="unable to write";  
        console.log(error);   
    }
    return {status,msg}
}
