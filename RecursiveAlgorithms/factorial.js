/**
 * @param {number} n number 
 * @returns {number}
 */
const Factorial = n => {
    if (n === 1 || n === 0) {
        return n
    }

    return n * Factorial(n - 1)
}


