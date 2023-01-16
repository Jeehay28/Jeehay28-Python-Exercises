function solution(N, stages) {
    let arr = [];
    for (let i=1; i<=N; i++) {
        if (stages.filter(x => x>=i).length !== 0) {
            arr.push(stages.filter(x => x===i).length / stages.filter(x => x>=i).length);
            } else {
                arr.push(0);  
            } 
        }
    console.log(arr)
    let sorted = [...arr];
    sorted = sorted.sort((a, b) => b - a);
    sorted = [...new Set(sorted)];
    let result = [];
    for (any of sorted) {
        if (arr.filter(x => x === any).length > 1) {
            let copy = [...arr]
            for (let i=0; i<arr.filter(x => x === any).length; i++) {
                result.push(copy.indexOf(any) + 1);
                copy[copy.indexOf(any)] = ""
                }
            } else {
                result.push(arr.indexOf(any) + 1);
                }
        }
    return result;
    }