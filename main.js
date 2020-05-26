// Add

function add(number1, number2) {
    return number1 + number2
}
add(2, 4)

console.log(add(2, 4))

// Multiply

function multiply(number1, number2) {
    let total = 0
    for (let index = 0; index < number1; index++) {
        total = add(total, number2)
    }
    return total
}
console.log(multiply(6, 4))


//Power

function power(x, n) {
    let total = 1
    for (let index = 1; index <= n; index++) {
        total = multiply(total, x)
    }
    return total
}
console.log(power(2, 8))
console.log(power(3, 4))

//Factorial with help from "free code camp"

function factorial(x) {
    if (x === 0 || x === 1)
        return 1;
    for (var index = x - 1; index >= 1; index--) {
        x = multiply(x, index)
    }
    return x;
}
console.log(factorial(5))
console.log(factorial(4))

//Fibonacci
// with the help of watching Pete and Cynthia.

function fibonacci(n) {
    let array = [0, 1];
    for (let index = 2; index < n; index = add(index, 1)) {
        let number1 = array[add(index, -1)]
        let number2 = array[add(index, -2)]
        let total = add(number1, number2)
        array.push(total)
        console.log(array)
    }
    return array[add(n, -1)]
}
console.log(fibonacci(8))