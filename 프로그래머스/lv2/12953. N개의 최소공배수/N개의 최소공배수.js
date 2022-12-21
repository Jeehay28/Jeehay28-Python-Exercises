function solution(arr) {
    arr = arr.sort((a, b) => a - b);
    let left = arr[0];
    for (let i=1; i < arr.length; i++) {
        let temp = common(divisors(left), divisors(arr[i]));
        console.log(temp)
    // 두 수를 곱해서 최대공약수로 나누기
        left = left * arr[i] / temp;
        console.log(left);
    }
    return left;
}

// 약수 []
function divisors(num){
    let temp = [];
for (let i=1; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
        temp.push(i);
    }
}
return [...new Set([...temp, ...temp.map(x => num / x)])].sort((a, b) => a - b);
}

// 최대공약수 []
function common(arrA, arrB) {
    let arr = [];
    if(arrA.length <= arrB.length) {
        arrA.forEach(
            x => {
        if(arrB.includes(x)) {
            arr.push(x);
        }
    })  
         
} else {
    arrB.forEach(
            x => {
        if(arrA.includes(x)) {
            arr.push(x);
        }
    })  
}
    return Math.max(...arr);
}

