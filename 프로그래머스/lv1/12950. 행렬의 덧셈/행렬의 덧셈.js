function solution(arr1, arr2) {
    let answer = []
    for (let i=0; i<arr1.length; i++) {
        let arr= [];
        arr1[i].forEach((el, loc) => arr.push(el + arr2[i][loc]));
        answer.push(arr);
    }
    return answer;
}