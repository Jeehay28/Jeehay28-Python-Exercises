function solution(num_list, n) {
    let answer = [];
    
    answer.push(...num_list.slice(n))
    answer.push(...num_list.slice(0, n));
    
    return answer;
}