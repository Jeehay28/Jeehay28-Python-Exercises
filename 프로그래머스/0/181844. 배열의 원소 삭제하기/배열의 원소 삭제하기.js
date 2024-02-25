function solution(arr, delete_list) {
    return arr.filter(x => { 
        if(!delete_list.includes(x)) {
            return x;
        } 
})
}