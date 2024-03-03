function solution(strArr) {
    const arr = strArr.map(item => item.length);
    
    const type = [...new Set(strArr.map(item => item.length))];
   
    return Math.max(...type.map(item => arr.filter(el => el === item).length))
    
}