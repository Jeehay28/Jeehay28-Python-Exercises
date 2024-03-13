function solution(arr, k) {
    let answer = new Array(k).fill(-1);
    
    [...new Set(arr)].slice(0, k).map((item, index) => {
        answer[index] = item;
    });
      
    return answer;
}