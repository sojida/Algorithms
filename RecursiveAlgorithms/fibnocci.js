// Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two.

// const fib = (n) => {
//     const arr = [0, 1]

//     if (n === 0) {
//         return [0]
//     }

//     if (n === 1) {
//         return arr
//     }

//     for (let i = arr.length; i <= n; i++) {
//        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
//     }

//     return arr
// }

const fib = (n) => {
    if (n === 0) {
        return [0]
    }

    if (n === 1) {
        return [0, 1]
    }

    const arr = fib(n - 1)
    const nextNumber = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(nextNumber)
    return arr
}


console.log(fib(10))