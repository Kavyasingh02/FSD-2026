import { readJsonFile } from "./readAndWriteServices.js";
const readFile=async(path)=>{
    try{
 const data= await readJsonFile(path,"utf-8");
//  console.log(data);
 
 return JSON.parse(data);
    }catch(err){
        console.log("Error ocuured",err);
        
    }
}
readFile("./students.json");