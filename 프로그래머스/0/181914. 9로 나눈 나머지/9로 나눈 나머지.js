function solution(number) {
    return number
        .split("")
        .map(num => + num)
        .reduce((total, el) => total + el, 0) % 9
}