function solution(my_string) {
    let answer = 0;
    const re = /[A-z]/g;
    let arr = my_string.split(re).map(x => parseInt(x)).filter(x => x >= 1);
    arr.length > 0 ? answer = arr.reduce((total, x) => total + x): answer = 0;
    return answer;
}