class MergeSort {
    sort(list = []) {
        if (list.length <= 1) {
            return list;
        }

        const midpoint = Math.floor(list.length/2)
        const firstHalve = list.slice(0, midpoint);
        const secondHalve = list.slice(midpoint, list.length);

        return this.merge(this.sort(firstHalve), this.sort(secondHalve));
    }
    
    merge(firstHalve=[], secondHalve=[]) {
        const auxilaryArray = [];

        while(firstHalve.length && secondHalve.length) {
            if (firstHalve[0] < secondHalve[0]){
                const num = firstHalve.shift();
                auxilaryArray.push(num);
            } else {
                const num = secondHalve.shift();
                auxilaryArray.push(num);
            }
        }

        while(firstHalve.length) {
            const num = firstHalve.shift();
            auxilaryArray.push(num);
        }

        while(secondHalve.length) {
            const num = secondHalve.shift();
            auxilaryArray.push(num);
        }

        return auxilaryArray;
    }
}

module.exports = MergeSort;
