//optional chaining
const user = {
  name:"vikas",
  age:24,
  location:"hyderabad",
  greet: ()=> ({bio:'developer'}),

  userArray: [{name:"obj1",id:1}]
}

console.log(user.age);
console.log(user.greet?.().bio);
console.log(user.userArray[0]);
console.log(user.userArray[0]?.id);
console.log(user.userArray[2]?.id)

