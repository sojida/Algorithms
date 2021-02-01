class BubbleSort {
    swap(list, indexA, indexB) {
        const auxilarySpace = list[indexA];
        list[indexA] = list[indexB];
        list[indexB] = auxilarySpace;
    }

    sort(list = []) {
        for(let i = 0; i < list.length; i++ ){
            for(let j = 0; j < list.length; j++){
                if (list[j] > list[j + 1]) {
                    this.swap(list, j, j + 1)
                }
            }
        }

        return list;
    }
};

module.exports = BubbleSort;
