function solution(array) {
    array.sort((x, y) => x - y);
    return array[Math.floor(array.length / 2)]
}