const binarySearch = (item) => {
    quickSort();  //{1}
    let low = 0,                 //{2}
        high = array.length - 1, //{3}
        mid, element;
    while (low <= high) { //{4}
        mid = Math.floor((low + high) / 2); //{5}
        element = array[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
            return -1; //{12}
};
