function solution(board, moves) {
    let basketLeft = {};
    for (let i=1; i<=board.length; i++) {
        basketLeft[i.toString()] = board.map(x => x[i-1]).filter(x => x > 0);
    }
   
    let basketRight = [];
    let cnt = 0;
    for (any of moves) {
        if (basketLeft[any.toString()].length !== 0) {
            if (basketRight[basketRight.length-1] === basketLeft[any.toString()][0]) {
                basketRight.pop();
                basketLeft[any.toString()].shift();
                cnt += 2;
            } else {
                basketRight.push(basketLeft[any.toString()].shift());
                }
            }
        }     
    return cnt;
}