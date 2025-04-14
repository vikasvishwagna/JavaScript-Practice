//1.Function Declaration
function greet0(name){
  return `hello ${name}!`;
}
console.log(greet0("sai vikas"));

//2.Function Expression
let greet = function(){
  console.log("hello");
};
greet();

//3.Arrow Function (ES6)
let greet2 = () => {
  console.log(`hello arrow fn`);
} 
greet2();

//4.fn parameters
function add(a,b){
  console.log(a+b);
}
add(5,2);

//5.default paramenets

function greet3(name="default param"){
  console.log(`hello ${name}`);
}
greet3();
greet3("u can add name here as well");
