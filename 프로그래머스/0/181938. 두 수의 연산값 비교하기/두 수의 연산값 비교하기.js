function solution(a, b) {
    // const calc1 = parseInt(a.toString() + b.toString());
    const calc1 = parseInt(`${a}${b}`)
    const calc2 = 2 * a * b;
    return calc1 > calc2 ? calc1 : calc2;
    
}