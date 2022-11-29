function solution(dot) {
    const quadrant = ['++', '-+', '--', '+-'];
    let x = "";
    let y = "";
    (dot[0] > 0 ? x = '+' : x = '-');
    (dot[1] > 0 ? y = '+' : y = '-');
    return quadrant.indexOf(x+y) + 1
}