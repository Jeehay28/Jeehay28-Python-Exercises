function solution(picture, k) {

    let answer = [];
    
    picture.map(pic => {
        return pic.split("").reduce((str, dot) => str + dot.repeat(k), "")
    }).map(item => {
        for(let i=0; i<k; i++) {
            answer.push(item);
        }
    } )

    return answer;
    
}