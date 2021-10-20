let numIn = parseInt(prompt("Enter number"));
 
let result = numIn % 2
 
console.log(Boolean(!(result == 1)));
console.log(Boolean(result == 0));




let num1 = parseInt(prompt("Enter number"))
let num2 = parseInt(prompt("Enter number"))
let result = num1 % num2
 
console.log(Boolean(result == 0))



let numOfStudents = 344
let maxCapacity = 42
 
let fullBuses = Math.floor(numOfStudents/ maxCapacity)
if ((numOfStudents % maxCapacity) != 0) {
fullBuses++
}
 
console.log(fullBuses)

