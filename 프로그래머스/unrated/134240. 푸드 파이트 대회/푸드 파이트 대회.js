function solution(food) {
    let arr = [];
    for (let i=1; i<food.length; i++) {
        arr.push(Math.floor(food[i] / 2));
    }
    let result = [];
    arr.forEach((el, loc) => {
        result.push((loc+1).toString().repeat(el));
    }) 
    return result.concat([0]).concat([...result].reverse()).join("")
    
}
