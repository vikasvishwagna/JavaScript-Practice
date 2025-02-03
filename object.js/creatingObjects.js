let person = {
  name : 'ajay',
  class : 10,
  school : "HTMLVideoElement",
  "roll no" : 56,
  'fav subj': "science"
};
//Returns array's of keys.
console.log("keys of a object",Object.keys(person));
//Returns arrays's of values.
console.log("values of a object",Object.values(person));

//iterating using for of.
for (const element of Object.values(person)) {
  console.log(element);
}



console.log(person);
console.log(person.class);
console.log(person.name,person["roll no"]);
person["class"] = 11;
console.log(person.class)



let car ={
  "name":'virtus',
  brand:`Honda`,
  'price':24,
  'year of manifacturing':2024
};
let key = "year of manifacturing";
console.log(car[key]);
console.log(car["year of manifacturing"]);
 
console.log("forin iterator------------");
for (let ele in car) {
  console.log(`${ele} : ${car[ele]}`);
}

console.log(car);
console.log(car["name"]);
console.log(car.name)//we can print in this way as well
console.log(car.brand);
console.log(car['brand']);//we can print in this way as well
console.log(car['year of manifacturing']);


