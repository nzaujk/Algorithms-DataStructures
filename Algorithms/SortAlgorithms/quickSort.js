const quickSort = () => {
    quick(array,  0, array.length - 1);
};

const quick = (array, left, right) => {
    let index; //{1}
    if (array.length > 1) { //{2}
        index = partition(array, left, right); //{3}
        if (left < index - 1) {
            quick(array, left, index - 1);
        }
        if (index < right) {
            quick(array, index, right);
        } }
};

const partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)], //{8}
        i = left,
        j = right;
    while (i <= j) {
        while (array[i] < pivot) {  //{12}
            i++; }
        while (array[j] > pivot) {  //{13}
            j--;
        }
        if (i <= j) { //{14}
            swap(array, i, j); //{15}
            i++;
            j--;
        } }
    return i; //{16}
};
//{9} //{10}
