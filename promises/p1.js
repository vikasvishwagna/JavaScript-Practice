//Promises 
let myPromise = new Promise(function(resolve,reject){//creating promises
  var isWorkDone = false;
  if(isWorkDone){
    resolve("isWorkDone is true");
  }else{
    reject( "isWorkDone is false");
  }
})
//method 1:using promises by .then and .catch methods. 
/*myPromise.then(function(msg){
  console.log("then is for resolve, and work is done",msg);
}).catch(function(msg){
  console.log("catch is for reject, and the work is not done",msg);
});*/

//method 2:using promises using try catch methods.
async function goo() {
  try{
    let message = await myPromise;
    console.log(message);
  }catch(e){
    console.log(e);
  }
}
goo();