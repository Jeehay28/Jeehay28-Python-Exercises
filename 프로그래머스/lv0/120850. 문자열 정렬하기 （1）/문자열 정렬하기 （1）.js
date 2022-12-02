function solution(my_string) {
   return my_string.replace(/[a-z]/g, "").split("").map(x => parseInt(x)).sort((x, y) => x - y);
}