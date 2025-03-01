function delayedMessage (){
  let promise = new Promise((resolve,reject)=>{
    //here resolve and reject are functions
    setTimeout(()=>{
      console.log("appears after 2 seconds");
      resolve();
    },2000);
  })
  return promise;
}

delayedMessage().then(()=>{
console.log("hello");
}).catch(()=>{
  console.log("reject message");
})


//----------------------------------------------------
// function delayedMessage() {
//   // Create a new Promise
//   let promise = new Promise((resolve) => {
//       setTimeout(() => {
//           console.log("This message appears after 2 seconds!");
//           resolve(); // Resolve the Promise
//       }, 2000);
//   });

//   // Return the Promise
//   return promise;
// }

// Call the function and handle the Promise
// delayedMessage().then(() => {
//   console.log("Promise resolved! 🎉");
// });