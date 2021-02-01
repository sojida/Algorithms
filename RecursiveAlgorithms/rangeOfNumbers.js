// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

const range = (num1, num2) => {
    function rangeRecur(num1, num2, arr) {
        if (num1 + 1 >= num2) {
            return arr
        }

        return rangeRecur(num1 + 1, num2, [...arr, num1 + 1])
    }

    return rangeRecur(num1, num2, [])
}

console.log(range(1,5))
console.log(range(1,1))
console.log(range(6,5))
console.log(range(-3,5))