function solution(arr, queries) {
    
    queries.map(([i, j]) => {
        
        const [x, y] = [arr[i], arr[j]];
     
        arr[i] = y;
        arr[j] = x;
        
    });
    
    return arr;
}