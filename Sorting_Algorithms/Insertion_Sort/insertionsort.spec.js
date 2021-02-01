const InsertionSort = require('./index');

test('Insertion Sort: it should sort array', () => {
    const unsortedArray = [8,4,2,1,5,7];
    const insertionSort = new InsertionSort();
    const sortedArray = insertionSort.sort(unsortedArray);
    expect(sortedArray).toEqual([1,2,4,5,7,8]);
})
