const mergeSortRec = (array) => {
    let length = array.length;
    if(length === 1) {      //{1}
        return array;       //{2}
    }
    let mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length); //{5}
    return merge(mergeSortRec(left), mergeSortRec(right)); //{6}
};

const merge = (left, right) => {
    let result = [], // {7}
        il = 0,
        ir = 0;
    while(il < left.length && ir < right.length) { // {8}
        if(left[il] < right[ir]) {
            result.push(left[il++]);  // {9}
        } else{
            result.push(right[ir++]); // {10}
        }
    }
    while (il < left.length){
        result.push(left[il++]);
    }
    while (ir < right.length){
        result.push(right[ir++]);
    }
    return result; // {13}
};
