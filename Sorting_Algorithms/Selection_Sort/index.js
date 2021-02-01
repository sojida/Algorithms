class SelectionSort {
    swap(list, indexA, indexB) {
        const auxilarySpace = list[indexA];
        list[indexA] = list[indexB];
        list[indexB] = auxilarySpace;
    }

    sort(list = []) {
        for(let i = 0; i < list.length; i++) {
            let min = list[i];
            let currentIndex = i;
            for (let j = i; j < list.length; j++) {
                let currentItem = list[j];
                if (currentItem < min) {
                    min = list[j];
                    this.swap(list, currentIndex, j)
                }
            }
        }

        return list;
    }
}

module.exports = SelectionSort;
