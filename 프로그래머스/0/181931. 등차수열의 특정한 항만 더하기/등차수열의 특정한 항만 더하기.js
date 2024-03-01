function solution(a, d, included) {
    
    const arrI = included.map((item, index) => item === true ? index : -1).filter(item => item >= 0);
        
    return arrI.reduce((total, i) => (total + (a + d*i)), 0);
    
}