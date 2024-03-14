function solution(arr) {
    let answer = [...arr]
    const [row, col] = [arr.length, arr[0].length];
    
    if(row > col) {
        answer = answer.map(item => {
            let temp = [...item, ...new Array(row-col).fill(0)];
            return temp;
            })    
        } else if(row < col) {
            let temp = new Array(col).fill(0);
            for(let i=0; i<col-row; i++) {
                answer.push(temp);
            }  
        } 
    
    return answer;
}