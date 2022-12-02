function solution(numbers, direction) {
    // to the right
    if (direction === "right"){
          numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    return numbers;
  
}