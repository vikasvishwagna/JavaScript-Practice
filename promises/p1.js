//Promises 
// let myPromise = new Promise(function(resolve,reject){//creating promises
//   var isWorkDone = false;
//   if(isWorkDone){
//     resolve("isWorkDone is true");
//   }else{
//     reject( "isWorkDone is false");
//   }
// })
//method 1:using promises by .then and .catch methods. 
/*myPromise.then(function(msg){
  console.log("then is for resolve, and work is done",msg);
}).catch(function(msg){
  console.log("catch is for reject, and the work is not done",msg);
});*/

//method 2:using promises using try catch methods.
// async function goo() {
//   try{
//     let message = await myPromise;
//     console.log(message);
//   }catch(e){
//     console.log(e);
//   }
// }
// goo();

//method 3: same as method 2 suing arrow fun.
const p1 = new Promise(function(resolve,reject){
  setTimeout(function(){
    reject("hello method 3!!")
  },3000)
});

const functionName = async () => {
  try{
    const myData = await p1; 
  console.log(myData);
  }catch(err){
    console.log(`error,${err}`);
  }
}
functionName();