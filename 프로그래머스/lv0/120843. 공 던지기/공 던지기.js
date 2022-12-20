function solution(numbers, k) {
    const loc = 2 * (k - 1);
    while (numbers.length < loc) {
        numbers = numbers.concat(numbers);
    }
    return numbers[loc];
}