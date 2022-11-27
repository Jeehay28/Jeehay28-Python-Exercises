function solution(money) {
    var answer = [];
    let cups = Math.floor(money / 5500);
    let left = money - (5500 * cups);
    answer = [cups, left];
    return answer;
}