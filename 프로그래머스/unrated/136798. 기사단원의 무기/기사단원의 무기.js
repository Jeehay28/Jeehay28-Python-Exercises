function solution(number, limit, power) {
    let arr = [];
    let cnt = 0;
    for (let i = 1; i <= number; i++) {
        arr.push(howManyDivisiors(i));
    }
    let answer = arr.filter(x => x <= limit).reduce((total, x) => total + x) + arr.filter(x => x > limit).length * power;
    return answer;
}

const howManyDivisiors = (num) => {
    let arr = [];
    for (let i=1; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return [...new Set(arr.concat(arr.map(x => num / x)))].length;
}