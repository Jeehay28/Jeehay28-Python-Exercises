function solution(arr, queries) {
    
    queries.map(([s,e,k]) => {
        for(let i=s; i<=e; i++) {
            i % k === 0 ? arr[i] += 1 : arr[i] += 0;
        }
    })
    
    return arr;
    
    
}