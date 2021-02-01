const SelectionSort = require('./index');

test('Selection Sort: it should sort array', () => {
    const unsortedArray = [8,4,2,1,5,7];
    const selectionSort = new SelectionSort();
    const sortedArray = selectionSort.sort(unsortedArray);
    expect(sortedArray).toEqual([1,2,4,5,7,8]);
})
