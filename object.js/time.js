let intervalId = setInterval(function(){
  console.log("hello");
}, 2000);


setTimeout(function(){
clearInterval(intervalId);
},8000);