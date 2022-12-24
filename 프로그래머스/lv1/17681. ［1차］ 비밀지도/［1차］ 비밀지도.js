function solution(n, arr1, arr2) {
    let arr = [];
    for (let i=0; i<n; i++) {
        let str = arr1[i] | arr2[i];
        str = str.toString(2).length < n ? ("0").repeat(n - str.toString(2).length) + str.toString(2) : str.toString(2);
        str = str.replaceAll("1", "#").replaceAll("0", " ");
    arr.push(str);
    }
    return arr;
   
}