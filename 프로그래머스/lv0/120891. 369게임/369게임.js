function solution(order) {
    let str = order.toString();
    let cnt = 0;
    for (let i = 0; i < str.length; i++){   
    if (order % 10 === 3 || order % 10 === 6 || order % 10 === 9) {
        cnt += 1;
    }
        order = Math.floor(order / 10);      
    }
    return cnt;
}