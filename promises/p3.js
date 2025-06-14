const getNum = new Promise((resolve)=>{
  resolve(10);
})

getNum.then((num)=>{
  console.log("FirstNum:",num);
  return num*2;//data
}).then((data)=>{
  console.log("Newnum:", data);
  return data+5;//data2
}).then((data2)=>{
  console.log("lastNum:", data2);
  return data2;
})