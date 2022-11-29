function solution(numbers) {
    let num = numbers;
    const alpha = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0; i<10; i++){
        num = num.replaceAll(alpha[i], i)
    }
    return parseInt(num);
}