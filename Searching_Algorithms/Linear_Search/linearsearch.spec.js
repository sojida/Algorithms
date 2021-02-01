const LinearSearch = require('./index');

test('Linear Search', () => {
    const list = [1,3,5,7,8,9]
    const linearsearch = new LinearSearch(list);
    expect(linearsearch.search(3)).toEqual(1);
    expect(linearsearch.search(10)).toEqual(-1);
});
