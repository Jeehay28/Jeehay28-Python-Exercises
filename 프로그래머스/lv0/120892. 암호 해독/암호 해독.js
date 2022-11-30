function solution(cipher, code) {
    let answer = [];
    for (let i=code; i<=cipher.length; i+=code){
       answer.push(cipher[i-1]); 
    }
    return answer.join("");
}