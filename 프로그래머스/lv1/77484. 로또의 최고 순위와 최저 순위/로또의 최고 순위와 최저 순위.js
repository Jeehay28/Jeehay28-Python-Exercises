function solution(lottos, win_nums) {
    let unknown = lottos.filter(x => x === 0).length;
    let won = lottos.filter(x => x !== 0).reduce((total, el) => total + win_nums.includes(el), 0)
    let obj = {"6" : 1, "5" : 2, "4" : 3, "3" : 4, "2" : 5, "1" : 6, "0" : 6}
    return [obj[(unknown + won).toString()], obj[won.toString()]];
}