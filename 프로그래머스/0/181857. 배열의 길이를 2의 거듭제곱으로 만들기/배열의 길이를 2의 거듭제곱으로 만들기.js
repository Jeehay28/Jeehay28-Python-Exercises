function solution(arr) {
    
    if(arr.length === 1) {
        return arr;
    } else {
        return [...arr, ...Array(2**Math.ceil(Math.log2(arr.length)) - arr.length).fill(0)];
        }
    
}