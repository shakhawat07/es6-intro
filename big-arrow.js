// arrow function with multiple parameter 
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 3, 4);
console.log(result);
// arrow function with single parameter and without bracket 
const fiveTimes = num => num * 5;
const output = fiveTimes(5);
console.log(output);
// arrow function without parameter 
const getName = () => 'Sk';
console.log(getName());
// arrow function with parameter and multiple line calculation and we have to use return
const calculation = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const output = sum * diff;
    return output;
}
const total = calculation(3, 2);
console.log(total);

