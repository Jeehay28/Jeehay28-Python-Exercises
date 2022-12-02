function solution(box, n) {
    let dices = 1;
    for (len of box){
        dices *= Math.floor(len / n)
    }
    return dices;
}