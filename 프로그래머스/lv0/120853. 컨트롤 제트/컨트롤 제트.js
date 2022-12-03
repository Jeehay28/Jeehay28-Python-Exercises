function solution(s) {
    let arr = s.split(" ");
    for (let i=0; i<arr.length; i++) {
        if(arr[i] === 'Z') {
        arr[i] = parseInt(arr[i-1])*(-1);
    }
}
    return arr.map(x => parseInt(x)).reduce((t, x) => t+x);
}