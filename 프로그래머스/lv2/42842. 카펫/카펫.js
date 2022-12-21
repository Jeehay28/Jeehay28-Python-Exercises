function solution(brown, yellow) {
    const lattice = brown + yellow;
      
    // lattice 의 약수 (2보다 커야 함)
    let temp = [];
    for (let i=1; i<=Math.sqrt(lattice); i++) {
        if (lattice % i === 0) {
            temp.push(i);
        }
    }
     
    let arr = [...new Set([...temp, ...temp.map(x => lattice / x)])].sort((a, b) => a - b);
    arr = arr.filter(x => x >= 2);
    
      //순회하면서 조건 확인
      // yellow = (w - 2) * (l - 2)
      // w*l = lattice;
    for(any of arr) {
        [w, l] = [any, lattice / any];
        if ((w - 2) * (l - 2) === yellow && w*l === lattice && w>= l) {
           return [w, l]; 
           break;
        }  
    }
}

