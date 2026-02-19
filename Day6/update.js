import { readJsonFile, writeJsonFile } from "../Day5/readAndWriteServices.js";

const FILE="../Day5/students.json"
const updateData=async(id,data)=>{
   const students=await readJsonFile(FILE);
   if(!students || students.length===0) return;
   const user=students.filter((student)=> student.id===id);
   if(user.length===0) return;
   const updatedStudents=students.map((student)=>
    student.id===id? {...student,}:student);
   const response= await writeJsonFile(FILE,updateData);
   console.log(response.status);
}
updateData(2,{first_name:"abc",last_name:"xyz"});


