const solution = (num_list) => {
    
    let answer = 0;
    
    num_list.map(item => {
        answer += count(item);
    })
    
    return answer;
    
}

const count = (num, cnt=0) => {
    
    if(num === 1) {
        return cnt;
    } else {
        num % 2 === 0 ? num = num / 2 : num = (num - 1)/2
        cnt += 1;
        return count(num, cnt)
        
    }
}
  
