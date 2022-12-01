function solution(n) {
    let pizza = 0;
    for (let i=1; i<=50; i++){
        if((6*i) % n === 0){
            pizza = i;
            break;
        } 
    }
    return pizza;
}