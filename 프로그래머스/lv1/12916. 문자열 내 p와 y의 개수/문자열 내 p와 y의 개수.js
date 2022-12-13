function solution(s){
    const numP = s.toLowerCase().split("").filter(x => x === "p").length;
    const numY = s.toLowerCase().split("").filter(x => x === "y").length;
    return numP === numY ? true : false;
}