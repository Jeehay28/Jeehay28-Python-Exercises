function solution(s) {
   const keys = new Set (s.split("").sort()); // Set
   const str = s.split("").sort().join(""); // ordered
   let answer = "";
   for (any of keys){
       if (str.indexOf(any) === str.lastIndexOf(any))
           {answer += any;}
   }
    return answer;
}