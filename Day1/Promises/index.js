const myPromise= new Promise((resolve,reject)=>{
    let marks=77;
    if(marks>80){
        resolve("pass");
    }
    else{
        reject("Try Again!");
    }
})
myPromise.then((msg)=>{
    console.log(msg);
})
.catch(err=>{
    console.log("there is some error",err);   
});