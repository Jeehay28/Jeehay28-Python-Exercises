function solution(babbling) {
    var answer = 0;
    for (word of babbling) {
        let result = "";
       result = word.replace("aya", "0").replace("ye", "0").replace("woo", "0").replace("ma", "0");
        result = result.replace("0", "").replace("0", "").replace("0", "").replace("0", "");
        if (result.length == 0) {
            answer += 1;
        }
    }
    return answer;
}

