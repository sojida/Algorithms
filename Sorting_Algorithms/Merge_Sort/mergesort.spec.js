const MergeSort = require('./index');

test('Merge Sort: it should sort array', () => {
    const unsortedArray = [8,4,2,1,5,7];
    const mergeSort = new MergeSort();
    const sortedArray = mergeSort.sort(unsortedArray);
    expect(sortedArray).toEqual([1,2,4,5,7,8]);
})
