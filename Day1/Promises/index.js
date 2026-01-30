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

const f1 = async()=>{
    try{
        const message = await myPromise;
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
// f1();
const getData = async()=>{
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        console.log(await response.json());
    } catch (error) {
        console.log(error);
    }
}
getData();