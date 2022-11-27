function solution(my_str, n) {
    var answer = [];
    const group = Math.ceil((my_str.length)/n);
    for (let i=0; i<group; i++) {
        answer.push(my_str.slice(i*n, (i+1)*n));
    }   
    return answer;
}