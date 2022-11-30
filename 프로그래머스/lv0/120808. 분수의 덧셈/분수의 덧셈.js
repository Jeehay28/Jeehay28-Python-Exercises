function solution(denum1, num1, denum2, num2) {
    [denum, num] = [(denum1 * num2 + denum2 * num1), (num1 * num2)];
    let cnt = 2;
    const n = num;
    for (let i = 2; i <= n; i++){
    (denum % cnt === 0 && num % cnt === 0 ? [denum, num] = ([denum, num]).map(x => x / cnt) : cnt++)
    }  
     return [denum, num];
     }
    