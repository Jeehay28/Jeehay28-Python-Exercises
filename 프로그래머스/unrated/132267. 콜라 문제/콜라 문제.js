function solution(a, b, n) {
    let free = 0;
    while (n >= a) {
        free += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + n % a;
    }
    return free + Math.floor(n / a);
}