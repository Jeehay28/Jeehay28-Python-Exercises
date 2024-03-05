function solution(my_string) {
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const arr = new Array(52).fill(0);
    
    [...alphabet].map((item, index) => {
        arr[index] = [...my_string].filter(str => str === item).length;
    })
    
    return arr;
    
}