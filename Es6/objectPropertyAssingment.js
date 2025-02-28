//Object property assignment
  
// properties
firstName = "amar";
lastName = "lal";

//assining properties to obj

//metho1: we used to follow this previously, with out using obj assining property.
const obj1 = {
  firstName : firstName,
  lastName : lastName
}
console.log(obj1);

//metho2:using obj assining property.
const obj2 = {
  firstName,
  lastName
}
console.log(obj2);