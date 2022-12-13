function solution(a, b) {
    let sum = 0;
    a.forEach((el, index) => {
        sum += el * b[index];
    })
    return sum;
}