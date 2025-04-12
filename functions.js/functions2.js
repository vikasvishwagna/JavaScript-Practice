let num = [10,55,2,9,43,67,1];
//1.Sort function
console.log(num.sort());// this sorts according the first ele of num.
//2.sort fun using a inbuilt fun.
let sortArr = num.sort(function(a,b){
  return a-b;
});
console.log(sortArr);

//3.find fun
let numGreaterThanOne = num.find(function(ele){
  return ele > 1;
});
console.log(numGreaterThanOne);//it only gives one ele.

//4.Use filter() when you need to remove elements based on a condition and doesnot change arr.
console.log("filter function");
let allNumGreaterThanOne = num.filter(function(ele){
  return ele > 1;
});
console.log(allNumGreaterThanOne);

//5.Use map() when you need to transform each element and doesnot change arr. 
let mapFunction = num.map(function(ele){
  return ele * 5;
});
console.log(mapFunction);
