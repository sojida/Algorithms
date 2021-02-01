// Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

const power = (base, exponent) => {
    if (exponent === 0) {
        return 1
    }

    if (exponent === 1) {
        return base
    }

    return base * power(base, exponent - 1)
}

console.log(power(8, 0))