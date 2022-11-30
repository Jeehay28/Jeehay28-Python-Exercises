function solution(i, j, k) {
    let str = "";
    for (let cnt = i; cnt <= j; cnt++){
        str += cnt.toString();
    }
  return str.split("").filter(x => x==k).length;
}
