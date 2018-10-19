const sequentialSearch = (item) => {
    for (let i=0; i<array.length; i++){ //{1}
        if (item === array[i]){         //{2}
            return i;                   //{3}
        } }
    return -1;  //{4}
};

