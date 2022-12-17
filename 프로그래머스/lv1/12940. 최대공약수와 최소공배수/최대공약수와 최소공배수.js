function solution(n, m) {
    const n_arr = getNums(n);
    const m_arr = getNums(m);
    let answer = [];
    let temp = [];
    let max = 0;
    
    for(let i=0; i<n_arr.length; i++) {
        for(let j=0; j<m_arr.length; j++) {
           if (n_arr[i] === m_arr[j]) {
               temp.push(n_arr[i] )
           }      
    }
        max = Math.max(...temp);
        answer = [max, n*m/max]
    }
    return answer;
}

[1, 3]
[1, 2, 3, 4, 6, 12]

function getNums(n) {
    let arr = [];
    for (let i=1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    arr = [...arr, ...arr.map(x => n / x)].sort((a, b) => a - b);
    return [...new Set(arr)];
}
