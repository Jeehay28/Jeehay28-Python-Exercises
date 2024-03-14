function solution(rank, attendance) {
   
    let attended = rank.filter((position, index) => attendance[index]).sort((a, b) => a - b);
    
    const [a, b, c] = attended.map(item => rank.indexOf(item))
    
    return a*10000 + b*100 + c;
         
}