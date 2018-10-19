function bubbleSort () {
    for(let i=0; i<array.length; i++){
        for( let j= 0; j<array.length-1; j++) {
            if(array[j]> array[j+1]) {
                swap(array, j, j+1)
            }
        }
    }
};

const swap = (array, index1, index2) => {
    const aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
};

