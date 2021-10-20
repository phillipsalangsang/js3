// Task 1
let number = prompt("Enter a number:", "")
// Taking user input

if (number % 2 == 0){
    alert ("Even number")
}else{
    alert ("Odd number")
}

// Task 2
let number1 = prompt("Enter first number:", "")
let number2 = prompt("Enter second number:", "")
// Taking user input

if (number1 / number2 == 0){
    alert ("True")
}else{
    alert ("False")
}

// Task 3
let students = 344
let buses = 42
let answer = Math.floor (students / buses)
alert ("The number of school buses needed:" + answer)