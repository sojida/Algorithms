class BinarySearch {
 constructor(list) {
     this.list = list;
 }

 search(item) {
		function searchList(list, item, lowerBound, upperBound) {
			let midpoint = Math.floor(lowerBound + (upperBound - lowerBound) / 2)

			if (lowerBound > upperBound) {
				return null;
			}

			if (list[midpoint] === item) {
				return midpoint;
			}
		
			if (list[midpoint] < item) {
				return searchList(list, item, midpoint + 1, upperBound);
			}
		
			if (list[midpoint] > item) {
				return searchList(list, item, lowerBound, midpoint -1);
			}
		}
	
		return searchList(this.list, item, 0, this.list.length -1);
 	}
}

module.exports = BinarySearch;

