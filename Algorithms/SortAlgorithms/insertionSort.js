const insertionSort = () => {
    let length = array.length;
    let j;
    let temp;
    for (let i = 1; i < length; i++) {
        j = i;
        temp = array[i];
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
    }
    array[j] = temp;
};
