function solution(array) {
   const deduplication = [...(new Set(array))];
   const answer = [];
   for (any of deduplication) {
       answer.push(array.filter(x => x === any).length);
   }
   if (answer.indexOf(Math.max(...answer)) === answer.lastIndexOf(Math.max(...answer))){
       return deduplication[answer.indexOf(Math.max(...answer))];
   } 
    return -1;
}