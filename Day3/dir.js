import fs from 'fs/promises'
const makedir=async(path)=>{
    try{
        await fs.mkdir(path);
         console.log("directory created");
         
    }
    catch(err){
        console.log("unable to make directory",err);
        
    }
}
//makedir("../Day4");
const readdir=async(path)=>{
    try{
        const res=await fs.readdir(path);
         console.log("successfull",res);    
    }
    catch(err){
        console.log("unable to read directory",err);
        
    }
}
readdir("../Day1").then(data=>console.log(data));;
const removedir=async(path)=>{
    try{
        await fs.rmdir(path);
         console.log("directory removed");     
    }
    catch(err){
        console.log("unable to remove directory",err);
        
    }
}
//removedir("./Day4");