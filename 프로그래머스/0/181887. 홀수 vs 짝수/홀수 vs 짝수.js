function solution(num_list) {
    let sumOfEvenNum = 0;
    let sumOfOddNum = 0;
    
    for (let i=0; i<num_list.length; i++) {
        i%2 === 0 ? sumOfEvenNum += num_list[i] : sumOfOddNum += num_list[i];
    }
    
    return Math.max(sumOfEvenNum, sumOfOddNum);
}