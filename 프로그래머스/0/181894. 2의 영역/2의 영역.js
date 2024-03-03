function solution(arr) {
    const [start, end] = [arr.indexOf(2), arr.lastIndexOf(2)];
    
    if(start === -1) {
        return [-1];
    } else {
        return arr.slice(start, end+1);
    }
    
}