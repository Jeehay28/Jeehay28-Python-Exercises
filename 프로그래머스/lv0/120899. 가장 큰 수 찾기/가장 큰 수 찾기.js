function solution(array) {
    desc = [...array]; 
    desc = desc.sort((a, b) => b - a);
    console.log(array);
    return [desc[0], array.indexOf(desc[0])];
}