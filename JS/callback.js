// function getdata(dataId,getNextdata ){
// setTimeout(()=>{
//     console.log("data",dataId)
//     if(getNextdata){
//         getNextdata();
//     }
// },2000);
// }
// getdata(1,()=>{
//     getdata(2);
// });

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am");
        resolve("sucess")
    })
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fullfilled",res);
});
promise.catch((err)=>{
    console.log("rejected",err);
});