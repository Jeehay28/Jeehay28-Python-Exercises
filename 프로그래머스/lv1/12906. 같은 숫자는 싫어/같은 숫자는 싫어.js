function solution(arr){
    let newArr = [arr[0]];
    for (let i=1; i<arr.length; i++) {
        if(newArr.slice(-1)[0] !== arr[i]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}