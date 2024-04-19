function solution(clothes) {
   
   const obj = clothes.reduce((acc, cur) => {
       const item = cur[1];
       acc[item] = (acc[item] || 0) + 1;
       return acc;
   }, {});
    
    const values = Object.values(obj);
    
    const cnt = values.reduce((acc, cur) => {
        return acc * (cur + 1)
    }, 1) - 1;

    return cnt;
    
}

