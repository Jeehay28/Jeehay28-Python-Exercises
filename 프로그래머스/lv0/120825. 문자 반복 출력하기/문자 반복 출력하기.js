function solution(my_string, n) {
    let str = "";
    for (char of my_string){
       str += char.repeat(n);
    }
   return str;  
}