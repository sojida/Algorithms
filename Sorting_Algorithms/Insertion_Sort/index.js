class InsertionSort {
    swap(list, indexA, indexB) {
        const auxilarySpace = list[indexA];
        list[indexA] = list[indexB];
        list[indexB] = auxilarySpace;
    }

    sort(list = []) {
        for(let i = 1; i < list.length; i++) {
            for(let j = i; j > 0 ; j--) {
                const currentIndex = j;
                if (list[currentIndex - 1] > list[currentIndex]) {
                    this.swap(list, currentIndex - 1, currentIndex)
                }
            }
        }

        return list
    }
}

module.exports = InsertionSort;
