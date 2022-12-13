function solution(arr, divisor) {
    let answer = [];
   arr.forEach((el) => {
       if (el % divisor === 0) {
           answer.push(el);
       }
   })
    answer.length !== 0 ? answer = answer.sort((a, b) => a - b) : answer = [-1];
    return answer;
}