function solution(s) {
   const numToEng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    while(isNaN(Number(s))) {
      for (let i=0; i<numToEng.length; i++){
        if (s.includes(numToEng[i])) {
            s = s.replace(numToEng[i], i);
        }
      }
    }
    return Number(s);
}