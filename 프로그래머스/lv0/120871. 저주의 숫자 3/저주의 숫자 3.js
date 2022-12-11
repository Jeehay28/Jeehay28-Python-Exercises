function solution(n) {
    let arr = [];
    let i = 1;
    while (arr.length <= 100) {
        if(i%3 !== 0) {
            if (i < 100 && i%10 !== 3 && Math.floor(i/10) !==3) {arr.push(i);}
            if (i >= 100 && i%10 !== 3 && Math.floor(i/100) !==3 && Math.floor(i /10) % 10 !== 3) {arr.push(i);}
        }
         i += 1;
    }
       return arr[n-1]; 
    }
