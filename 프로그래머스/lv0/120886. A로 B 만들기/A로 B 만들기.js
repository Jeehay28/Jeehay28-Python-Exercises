function solution(before, after) {
    let answer = 0;
  if (before.split("").sort().join("") === after.split("").sort().join(""))
      {answer = 1}
  return answer;
}
