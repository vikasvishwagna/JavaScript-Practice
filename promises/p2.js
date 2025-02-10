const myPromise = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("work done!");
  },3000);
})
myPromise.then(function(message){
  console.log(message);
}).catch(function(message){
  console.log(message);
});



