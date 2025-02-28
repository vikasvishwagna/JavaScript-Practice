// 📌 Scenario
// A customer places an order at a restaurant, and the process follows these steps:

// 1️⃣ Place Order (Takes 2 sec)
// 2️⃣ Prepare Food (Takes 5 sec)
// 3️⃣ Deliver Food (Takes 3 sec)
// 4️⃣ Order Received by Customer (Instant)
console.log("welcome to zomato!!");
console.log("select item from the menu.");
console.log("click ok to place order.");

function placeOrder(callback){
  setTimeout(()=>{
    console.log("order placed");
    callback();
  },2000);
}


function prepareFood(callback){
  setTimeout(()=>{
  console.log("preparing food");
  callback();
},2000);
}

function deliver(callback){
  setTimeout(() => {
  console.log("food is on the way");
  callback();
},5000);
}
function orderReceived(){
  setTimeout(() => {
  console.log("order received sucessfully!!");
}, 2000);
}

placeOrder(()=>{
  prepareFood(()=>{
    deliver(()=>{
      orderReceived();
    })
  })
})