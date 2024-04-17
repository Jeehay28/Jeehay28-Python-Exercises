function solution(n, left, right) {
    
    const arr = new Array(n).fill(0).map((_, index) => index + 1);
    let result = [];
    for (let i=left; i<=right; i++){
        const r = Math.floor(i/n);
        const c = i % n;
        if(r<=c) {
          result.push(arr[c])
        } else {
          result.push(arr[r])
        }
    }
    return result;
}