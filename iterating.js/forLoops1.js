let nums = [1,87,4,65,235,4,9];

//1.for loop
for(let i=0; i<nums.length; i++){
  console.log(nums[i]);
}

//2.for each loop.
console.log("---for each loop.---");
nums.forEach(function(ele){
  console.log(ele);
});


//3.for in loop. in simple this gives the idx, so we have to print the val.
console.log("---for in loop.---");
for(val in nums){
  console.log(nums[val]);
}

//4.for of loop.
console.log("---for of loop---");
for(ele of nums){
  console.log(ele);
};

