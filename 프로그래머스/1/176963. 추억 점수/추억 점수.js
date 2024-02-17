function solution(name, yearning, photo) {
    let obj = {};
    let answer = [];
    name.forEach((key, index) => (obj[key] = yearning[index]));     
    photo.forEach((item, index) => (
        answer[index] = item.reduce((total, memory) => total + (obj[memory] === undefined ? 0 : obj[memory]), 0)
    ))
        
    return answer;
        
    }
    