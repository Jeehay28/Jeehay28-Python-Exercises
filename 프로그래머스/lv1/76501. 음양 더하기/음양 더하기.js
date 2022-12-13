function solution(absolutes, signs) {
    let arr = []
    for (let i=0; i<absolutes.length; i++){
        signs[i] === true ? arr.push(absolutes[i]) : arr.push(-absolutes[i]);
    }
    return arr.reduce((t, x) => t + x);
}