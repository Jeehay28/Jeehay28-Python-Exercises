function solution(arr1, arr2) {
    
    const length1 = arr1.length;
    const length2 = arr2.length;
    
    if(length1 > length2) {
        return 1;
    } else if (length1 < length2) {
        return -1;
    } else {
        const sum1 = arr1.reduce((el, tot) => tot + el, 0);
        const sum2 = arr2.reduce((el, tot) => tot + el, 0);
        if (sum1 > sum2) return 1;
        if (sum1 < sum2) return -1;
        if (sum1 === sum2) return 0;
    }
}