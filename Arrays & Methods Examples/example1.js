
// JavaScript Arrays & Methods Examples

// 1. push()
let pushArr = [1, 2, 3];
pushArr.push(4);
console.log("push:", pushArr); // [1, 2, 3, 4]

// 2. pop()
let popArr = [1, 2, 3];
let popped = popArr.pop();
console.log("pop:", popped, popArr); // 3 [1, 2]

// 3. shift()
let shiftArr = [10, 20, 30];
let shifted = shiftArr.shift();
console.log("shift:", shifted, shiftArr); // 10 [20, 30]

// 4. unshift()
let unshiftArr = [2, 3];
unshiftArr.unshift(1);
console.log("unshift:", unshiftArr); // [1, 2, 3]

// 5. map()
let mapArr = [1, 2, 3];
let squared = mapArr.map(n => n * n);
console.log("map:", squared); // [1, 4, 9]

// 6. filter()
let filterArr = [1, 2, 3, 4];
let evens = filterArr.filter(n => n % 2 === 0);
console.log("filter:", evens); // [2, 4]

// 7. reduce()
let reduceArr = [1, 2, 3, 4];
let total = reduceArr.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", total); // 10

// 8. find()
let findArr = [1, 3, 5, 7];
let found = findArr.find(n => n > 4);
console.log("find:", found); // 5

// 9. some()
let someArr = [1, 2, 3];
let hasEven = someArr.some(n => n % 2 === 0);
console.log("some:", hasEven); // true

// 10. every()
let everyArr = [2, 4, 6];
let allEven = everyArr.every(n => n % 2 === 0);
console.log("every:", allEven); // true

// 11. forEach()
let forEachArr = [10, 20, 30];
forEachArr.forEach((n, i) => console.log(`Index ${i} has value ${n}`));

// 12. slice()
let sliceArr = [10, 20, 30, 40];
let sliced = sliceArr.slice(1, 3);
console.log("slice:", sliced); // [20, 30]

// 13. splice()
let spliceArr = [1, 2, 3, 4];
spliceArr.splice(1, 2, 20, 30);
console.log("splice:", spliceArr); // [1, 20, 30, 4]

// 14. includes()
let includesArr = [1, 2, 3];
console.log("includes 2:", includesArr.includes(2)); // true
console.log("includes 5:", includesArr.includes(5)); // false

// 15. indexOf()
let indexOfArr = ["a", "b", "c"];
console.log("indexOf b:", indexOfArr.indexOf("b")); // 1
console.log("indexOf z:", indexOfArr.indexOf("z")); // -1

// 16. join()
let joinArr = ["apple", "banana", "cherry"];
console.log("join:", joinArr.join(", ")); // "apple, banana, cherry"

// 17. sort()
let sortArr = [5, 2, 10, 1];
sortArr.sort();
console.log("default sort:", sortArr); // [1, 10, 2, 5]
sortArr.sort((a, b) => a - b);
console.log("numeric sort:", sortArr); // [1, 2, 5, 10]
