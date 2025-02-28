function greet(x,callback){
  console.log("nice to see u",x);
  callback();
}

function hello(){
  console.log(`this is a hello function`);
}

greet("arjun",hello);
