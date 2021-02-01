// Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

const merge = (firstHalve, secondHalve) => {
    const arr = []

    while(firstHalve.length && secondHalve.length) {
        if (firstHalve[0] < secondHalve[0]) {
            arr.push(firstHalve.shift())
        } else {
            arr.push(secondHalve.shift())
        }
    }

    while(firstHalve.length) {
        arr.push(firstHalve.shift())
    }

    while(secondHalve.length) {
        arr.push(secondHalve.shift())
    }

    return arr;
}

const mergeSort = (arr) => {

    if (arr.length <= 1) {
        return arr
    }

    const midpoint = Math.floor(arr.length/2)
    const firstHalve = arr.slice(0, midpoint);
    const secondHalve = arr.slice(midpoint, arr.length)

    return merge(mergeSort(firstHalve), mergeSort(secondHalve))
}

console.log(mergeSort([34,7,23,32,5,62]))