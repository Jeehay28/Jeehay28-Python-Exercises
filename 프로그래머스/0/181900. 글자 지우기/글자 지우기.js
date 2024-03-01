const solution = (my_string, indices) => {
    
    let answer = [...my_string];
    indices.map(index => answer[index] = "");
    
    return answer.join("");
}