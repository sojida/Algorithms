// Write a JavaScript program to check whether a number is even or not.

const isEven = (n) => {
    if (n === 0) {
        return true
    } 

    if (n === 1) {
        return false
    }

    return isEven(Math.abs(n) % 2)
}

console.log(isEven(9))
console.log(isEven(-9))
console.log(isEven(-2))