const solution = (a, b, c, d) => {
   
    const arr = [a, b, c, d];
    
    const s = [...new Set(arr)];
    
    console.log(s)
    
    let s0;
    let s1;
    let s2;
    
    switch(s.length) {
        case 4:
            return Math.min(...arr);
        case 1:
            return 1111 * s[0];
        case 2:
            // 2 2
            // 3 1
            s0 = arr.filter(x => x === s[0]).length
            s1 = arr.filter(x => x === s[1]).length
            
            return s0 === 2 && s1 === 2 ? (s[0] + s[1]) * Math.abs(s[0] - s[1]) : s0 === 3 ? (s[0] * 10 + s[1])**2 : (s[1] * 10 + s[0])**2;
        case 3:
            // 1 2 1
            s0 = arr.filter(x => x === s[0]).length
            s1 = arr.filter(x => x === s[1]).length
            s2 = arr.filter(x => x === s[2]).length
            
            return s0 === 2 ? s[1] * s[2] : s1 === 2 ? s[0] * s[2] : s[0] * s[1]
    }
}