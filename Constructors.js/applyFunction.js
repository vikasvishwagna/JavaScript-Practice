function printName(city,profession){
console.log(this.name,this.id,city,profession);
}

const student1 = {
  name:"ajay",
  id : 14
}

const student2 = {
  name:"mahesh",
  id : 65
}

const student3 = {
  name:"funny",
  id : 36
}

//call->  Invokes the function immediately, passing arguments individually.
printName.call(student1,"hyderabad","muscian");
printName.call(student3);

//apply->  Invokes the function immediately, passing arguments as an array.
printName.apply(student2,["banglore","IT"]);

//bind-> Creates a new function with the specified this and optional arguments, which can be invoked later.
const bindFun = printName.bind(student3,"nodia","Mechanic"); 
bindFun();