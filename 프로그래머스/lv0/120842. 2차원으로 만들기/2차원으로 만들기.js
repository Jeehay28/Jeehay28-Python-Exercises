function solution(num_list, n) {
    const cnt = num_list.length / n; 4
    let arr = [];
    for (let i = 0; i < cnt; i++){
        arr.push(num_list.slice(i*n, (i+1)*n));
    }
    return arr;    
}