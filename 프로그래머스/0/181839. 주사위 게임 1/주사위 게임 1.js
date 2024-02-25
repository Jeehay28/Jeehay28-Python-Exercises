function solution(a, b) {
    const [isAOdd, isBOdd] = [a%2 === 1, b%2 === 1];
    
    if(isAOdd && isBOdd) {
        return Math.pow(a, 2) + Math.pow(b, 2);
    }
    
    if(isAOdd || isBOdd) {
        return 2 * (a + b);
    }
    
    if(!isAOdd && !isBOdd) {
        return Math.abs(a - b);
    }
}



