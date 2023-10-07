function solution(todo_list, finished) {
    var answer = [];
    
    return todo_list.filter((todo, index) => !finished[index] ? todo : "")
    
    
    
}