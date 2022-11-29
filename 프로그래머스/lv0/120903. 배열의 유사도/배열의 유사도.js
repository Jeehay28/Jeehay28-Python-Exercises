function solution(s1, s2) {
    let cnt = 0;
  for (el of s1) {
      if (s2.includes(el)){
          cnt += 1;
      }
  }
    return cnt;
}