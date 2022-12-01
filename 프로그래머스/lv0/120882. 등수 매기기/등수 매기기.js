function solution(score) {
   let arr = [];
    for (any of score){
        arr.push(any.reduce((t, s) => t + s))
    }
    let desc = [...arr];
    desc = desc.sort((x,y) => y-x);
    let sorted = [];
    for (let i = 0; i < desc.length; i++){
        sorted[i] = desc.indexOf(arr[i]) + 1;
    }
    return sorted;
}