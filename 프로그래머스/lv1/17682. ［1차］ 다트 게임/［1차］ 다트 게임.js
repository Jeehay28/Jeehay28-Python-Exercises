function solution(dartResult) {
    dartResult = dartResult.replaceAll("*", "v");
    let arr = ["S", "T", "D", "#", "v"];
    for (any of arr) {
        let re = new RegExp(any, "g");
        dartResult = dartResult.replaceAll(re, any + ",");
    }
    let result = [];
    for (any of dartResult.split(",")) {
        if(any.includes("S")) {
            result.push(parseInt(any))
        }
        if (any.includes("D")) {
            result.push(parseInt(any)**2)
        }
        if (any.includes("T")) {
            result.push(parseInt(any)**3)
        }
        if (any.includes("v")) {
            if (result.length >= 2) {result[result.length-2] = result[result.length-2] * 2;}
            if (result.length >= 1) {result[result.length-1] = result[result.length-1] * 2;}
        }
        if (any.includes("#")) {
            if(result.length >=1) {result[result.length-1] = result[result.length-1] * (-1);} 
        }
        }
    return result.reduce((total, el) => total + el, 0)  
}