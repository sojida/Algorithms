const BinarySearch = require('./index');
const BinarySearchIterative = require('./binarysearchiterative');

test('Binary Search', () => {
    const list = [1,3,5,7,8,9];
    const binarysearch = new BinarySearch(list);
    expect(binarysearch.search(3)).toEqual(1);
    expect(binarysearch.search(10)).toEqual(null);
});


test('Binary Search(Iterative)', () => {
    const list = [1,3,5,7,8,9];
    const binarysearch = new BinarySearchIterative(list);
    expect(binarysearch.search(3)).toEqual(1);
    expect(binarysearch.search(10)).toEqual(null);
});