class BinarySearch {
    constructor(list) {
       this.list = list;
    }

    search(item){
        let lowerBound = 0;
        let upperBound = this.list.length -1;
        let valueIndex = null

        while(lowerBound <= upperBound){
            let midpoint = Math.floor(lowerBound + (upperBound - lowerBound) / 2)

            if (this.list[midpoint] === item){
                valueIndex = midpoint;
                break;
            }

            if (this.list[midpoint] > item){
                upperBound = midpoint - 1
            } else {
                lowerBound = midpoint + 1
            }
        }

        return valueIndex;
 	}
}

module.exports = BinarySearch;

