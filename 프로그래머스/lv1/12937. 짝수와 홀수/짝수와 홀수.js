function solution(num) {
    const remainder = Math.abs(num) % 2;
    switch(remainder) {
        case 0:
            return "Even";
            break;
        case 1:
            return "Odd";
            break;
    }
}