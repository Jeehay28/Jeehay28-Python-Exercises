function solution(nums) {
    nums.sort((a, b) => a - b);
    let cnt = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let any = nums.slice(i, i + 1)[0];
        // console.log(any)
        let arr = nums.slice(i + 1);
        // console.log(arr)
        for (let j = 0; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                // console.log(any, arr[j], arr[k])
                cnt += isPrime(any + arr[j] + arr[k]) ? 1 : 0;
            }

        }
    }
    return cnt;
}

const isPrime = number => {
    if (number === 1) {
        return false;
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
                break;
            }
        }
        return true;
    }
}