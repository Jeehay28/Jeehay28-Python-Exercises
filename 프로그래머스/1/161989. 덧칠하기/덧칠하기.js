function solution(n, m, section) {
    let count = 0;
    
    if(m === 1) {
        return section.length;
    } 
    
    if(section.length === 1 || n === m) {
        return 1;
    }
    
    let arr = [...section];
    
    for(let i=1; i<=Math.ceil(n/m); i++) {
        count += 1;
        const [s, e] = [arr[0], arr[0] + m];        
        arr = arr.filter(x => x>= e)
        if(arr.length === 0) {
            break;
        } 
    }
    
    return count;
}