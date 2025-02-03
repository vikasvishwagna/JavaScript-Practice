let fruits = ["apple", "grapes", "strawberry"];

//forof Used to iterate over iterable objects like arrays, strings, maps, set.
for (const val of fruits) {
  console.log(val);
}

let ships = {
  name : "cruise",
  country : "USA",
  year : 2011
};

//returns key,value of object. 
console.log(ships);
//return arrays of keys of obj. 
console.log(Object.keys(ships));
//return arrays of values of obj.
console.log(Object.values(ships));
//returns an array of key,val pair.
console.log(Object.entries(ships));

//Used to iterate over the properties(keys) of an object.
console.log('---forin---')
for (const k in ships) {
  console.log(k,":",ships[k]);
  //console.log(`${k} : ${ships[k]}`);//another way using backticks.
  //console.log(ships[k]);//gives the values but not in arrays.
}