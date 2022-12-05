function solution(n) {
   let answer = [];
   if (isPrime(n)) {
       answer[0] = n;
       } else {
           let arr = [];
        for (let i=2; i <= Math.sqrt(n); i++) {
       if (n % i === 0) {
       arr.push(i);
       }   
       }
           answer = [...arr, ...arr.map(x => n/x)];
           answer = [...new Set(answer)].filter(x => isPrime(x));
}
return answer;
}


function isPrime(n) {
    let arr = [];
    for (let i=2; i<=n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    if (arr.length === 1) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
