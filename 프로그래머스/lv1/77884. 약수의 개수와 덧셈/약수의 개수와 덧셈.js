function solution(left, right) {
    let sum = 0
    for (let i=left; i<=right; i++){
        getdivisors(i) % 2 === 0 ? sum += i : sum -= i;
    }
    return sum;
}

function getdivisors(num) {
    let arr1 = [];
    for (let i=1; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
            arr1.push(i);
        }
    }
    let arr2 = [];
    arr1.forEach(el => arr2.push(num/el))
    let arr = [];
    arr = [...arr1, ...arr2];
    
    return [...new Set(arr)].length;
}