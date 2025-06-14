//placeorder, prepareFood, deliver, orderReceived
function placeorder(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("orderPlaced");
      resolve();
    },2000);
  })
}

function preparingFood(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("food is prepared, about to deliver");
      resolve();
    },4000);
  })
}

placeorder()
.then(preparingFood)