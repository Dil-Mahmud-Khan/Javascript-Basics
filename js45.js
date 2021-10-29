//how to create pending promise resolve and reject


console.log("Welcome");
const promise1=new Promise((resolve,reject)=>{
    let completedPromise=false;
    if(completedPromise){
        resolve("Completed promise 1")
    }
    else{
        reject("Not Completed  promise 1")
    }

});


// console.log(promise1);
promise1.then((res)=>{
    console.log(res);
})
promise1.catch((err)=>{
    console.log(err);
});
console.log("End");
