function solution(my_string, letter) {
    const re = new RegExp(`${letter}`, 'g'); 
    return my_string.replace(re, "");
}