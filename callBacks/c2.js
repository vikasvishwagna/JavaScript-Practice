function orderPizza(callback){
  setTimeout(()=>{
    console.log("i need chicken tikka pizza!!");
    reviewPizza();//it will not wait, as it takes 6sec, it excuted the next fun.
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
orderPizza(eatPizza);//this is async fn so it executes the next line.
console.log("finally done eating and reviewing the pizza");