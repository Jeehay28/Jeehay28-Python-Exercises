function solution(array, n) {
   const arr = array.map(x => Math.abs(x-n));
   const min = Math.min(...arr);
   let answer = 0;
   (array[arr.indexOf(min)] > array[arr.lastIndexOf(min)]
   ? answer = array[arr.lastIndexOf(min)] : answer = array[arr.indexOf(min)]) 
    return answer;
}