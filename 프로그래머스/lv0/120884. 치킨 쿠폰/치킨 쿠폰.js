function solution(chicken) {
    let sum = 0;
    free = Math.floor(chicken / 10);
    rest = chicken % 10;
    sum += free;
    
    while ((free + rest) >= 10) {
        sum += Math.floor((free + rest) / 10);
        rest = (free + rest) % 10;
        free = Math.floor((free + rest) / 10);
}
    return sum;
}
