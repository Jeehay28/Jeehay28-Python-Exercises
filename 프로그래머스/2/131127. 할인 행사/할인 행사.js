function solution(want, number, discount) {
   
    let wantObj = {}
    let days = 0;
    want.map((item, index) => {
       wantObj[item] = number[index]
    })
    
    for(let i=0; i<discount.length; i++) {
        let arr = discount.slice(i, i+10);
        arr = arr.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {})
        
        if(want.every((item) => arr[item] === wantObj[item])) {
            days += 1;
        }
    }
    
    return days;
}

             
             