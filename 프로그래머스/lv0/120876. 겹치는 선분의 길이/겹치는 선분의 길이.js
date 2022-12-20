function solution(my_string) {
    let arr = [];
    for (any of my_string) {
        let temp = [];
        for (let i = any[0]; i <= any[1]; i++) {
            temp.push(i);
        }
        arr.push(temp);
    }
    [max, min] = [Math.max(...my_string.flat()), Math.min(...my_string.flat())];
    let duplicates = Array(max - min);
    let loc = 0;
    for (let i = min; i <= max; i++) {
        let cnt = 0;
        for (any of arr) {
            if (any.includes(i) && any.includes(i + 1)) {
                cnt++;
                duplicates[loc] = cnt;
            }
        } duplicates[loc] = cnt;
        loc++;
    }
    return duplicates.filter(x => x >= 2).length;
}