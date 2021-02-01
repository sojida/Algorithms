const BubbleSort = require('./index');

test('Bubble Sort: it should sort array', () => {
    const unsortedArray = [8,4,2,1,5,7];
    const bubbleSort = new BubbleSort();
    const sortedArray = bubbleSort.sort(unsortedArray);
    expect(sortedArray).toEqual([1,2,4,5,7,8]);
})
