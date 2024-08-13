function square(num) {
  let result = num * num;
  return result;
}

//the issues in these code is you should have to use let or const to declare the variables result and result2 

//By using let or var keyword to declare result and result2,
//we ensure that each variable is scoped correctly and not overwritten by subsequent calls to the square function

let result = square(4);
let result2 = square(2);
var subtracted = result - result2;
console.log(subtracted); // Output: 12
