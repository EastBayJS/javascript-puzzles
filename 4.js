var evenNumbers = [];

function addEvensOnly(num) {
  if (num % 2 === 0) {
    console.log(num, 'is even, adding!');
    evenNumbers.push(num);
  }
}

//The issue in these code is that the if statement is not properly enclosing the line.
//Without curly braces {}, only the first statement after the if condition is considered part of the if block.
// By adding curly braces around the code inside the if statement, we ensure that both console.log and evenNumbers.push are executed only when the condition num % 2 === 0 is true.


addEvensOnly(0);
addEvensOnly(1);
addEvensOnly(2);
addEvensOnly(3);
addEvensOnly(4);

console.log('even numbers: ', evenNumbers);

