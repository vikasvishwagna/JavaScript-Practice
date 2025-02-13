//chaining Promises
/*let myPromise = new Promise(function(resolve,reject){
setTimeout(function(){
  resolve(1);
},2000)
});

myPromise.then(function(val){
  console.log(val);
  return val * 2;//returns the data to the next then.
}).then(function(val){
  console.log(val);
  return val * 3;
}).then(function(val){
  console.log(val);
});*/

//Task: return value after 2 sec to next then.

// const myPromise = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve(1);
//   },5000)
//   });
   

//  myPromise.then(function(val){
//   console.log(val);
//   return new Promise(function(resolve,reject){
//     setTimeout(() => {
//       resolve(val*2)
//     }, 2000);
//   })
//  }).then(function(val){
//   console.log(val);
//   return new Promise(function(resolve,reject){
//     setTimeout(() => {
//       resolve(val*3)
//     }, 2000);
//   })
//  }).then(function(val){
//   console.log(val);
//  })
