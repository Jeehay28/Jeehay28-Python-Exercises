function solution(people, limit) {
    people.sort((a, b) => a - b);
    let boats = 0;
    while(people.length !== 0) {
        if(people[0] + people[people.length - 1] <= limit) {
            people.shift();
            people.pop();
            boats += 1;
        } else if (people[0] + people[people.length - 1] > limit) {
            people.pop();
            boats += 1;
        }
    }
    return boats;
}
