function solution(my_string) {
    let arr = [];
    let answer = 0;
    my_string = my_string.replace(/ /g, "").replace(/,/g, "");
    arr = my_string.split("+");
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].startsWith("-") && arr[i].includes("-")) {
            let temp = arr[i].split("-");
            for (let j = 1; j < temp.length; j++) {
                temp[0] -= temp[j];
            }
            arr[i] = temp[0];
            // console.log(arr[i]);
        }
    }
    answer = arr.map(x => parseInt(x)).reduce((t, a) => t + a);
    return answer;
}