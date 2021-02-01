const arrayLoop = arr => {
    // base case
    if (arr.length === 0) {
        return;
    }

    console.log(arr[0])

    // recursive case
    return arrayLoop(arr.slice(1, arr.length));
}

console.log(arrayLoop([1,2,3,4,5,6,7,8,9]))