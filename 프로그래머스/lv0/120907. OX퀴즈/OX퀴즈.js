function solution(quiz) {
    var answer = [];
      let x = 0;
      let y = 0;
      let z = 0;
    for (q of quiz) {
        let arr = q.split("=");
        z = parseInt(arr[1]);
        if (arr[0].split(" + ").length === 2) {
            x = parseInt(arr[0].split(" + ")[0]);
            y = parseInt(arr[0].split(" + ")[1]);
            (x + y === z ? answer.push("O") : answer.push("X"))
        } else {
            x = parseInt(arr[0].split(" - ")[0]);
            y = parseInt(arr[0].split(" - ")[1]);
            (x-y === z ? answer.push("O") : answer.push("X"))
        }    
}
    return answer;
}
