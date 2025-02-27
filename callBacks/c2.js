function orderPizza(callback){
  setTimeout(()=>{
    console.log("i need chicken tikka pizza!!");
    reviewPizza(callback);//it will not wait, as it takes 6sec, it excuted the next fun.
    callback();
  },3000);
}

function eatPizza(){
  console.log("eating pizza...");
}

function reviewPizza(){
  setTimeout(()=>{
    console.log("pizza tastes good!!");
  },6000);
}

console.log("calling dominos...");
orderPizza(eatPizza);//it will not wait.
console.log("finally done eating and reviewing the pizza");