 //spread operator

  //1.using arrays.  
  // Task: make other arr same as arr1.
  const arr1 = [1,54,75];
  const arr2 = [...arr1];//creating the same arr1.
  arr2[0]=500
  console.log(arr1);
  console.log(arr2);

  //2.using objects.
  //  Task: make other obj same as obj 1.
  const nums1 ={
    a:10,
    b:25,
    c:56
  }
const nums2 ={
  ...nums1
}
console.log(nums1);
console.log(nums2);

//task 2: change the value of a=532.
const nums3 = {
  ...nums1,
  a:532
}
console.log(nums3);