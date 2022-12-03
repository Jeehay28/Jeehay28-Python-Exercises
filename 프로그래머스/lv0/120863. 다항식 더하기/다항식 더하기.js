function solution(polynomial) {
    let answer = 0;
    let a = polynomial.split(" + ").filter(x => x.includes('x')).map(x => (x==='x' ? x = 1 : x));
    let b = polynomial.split(" + ").filter(x => !x.includes('x'));
    (a.length > 0 ? a = a.map(x => parseInt(x)).reduce((t, n) => t + n) : a = a.length); 
    (b.length > 0 ? b = b.map(x => parseInt(x)).reduce((t, n) => t + n) : b = b.length);
    if (a !== 0 && b !== 0){
        (a === 1 ? answer = `x + ${b}` : answer = `${a}x + ${b}`)
   } else if (a === 0){
       answer = `${b}`;
   } else {
       (a === 1 ? answer = `x` : answer = `${a}x`)
   } 
    return answer;
}