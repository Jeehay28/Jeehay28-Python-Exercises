function solution(n) {
    let answer = 0;
    let factorial = 1;
    for (let i = 1; i <=10 ; i++){
       factorial *= i;
       if (factorial > n){
           answer = i-1;
           break;
       } else if (factorial === n){
            answer = i;
           break;
       }   
       }
    return answer;
   } 