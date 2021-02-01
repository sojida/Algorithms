class LinearSearch {
    constructor(list = []) {
        this.list = list;
    }

    search(item) {
        for(let i = 0; i <= this.list.length; i++) {
            if (this.list[i] === item) {
                return i;
            };
        };
        
        return -1
    };
};

module.exports = LinearSearch;
