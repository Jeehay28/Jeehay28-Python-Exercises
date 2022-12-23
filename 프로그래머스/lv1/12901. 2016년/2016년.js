function solution(a, b) {
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const theDay = new Date(`2016-${a}-${b}`)
    return days[theDay.getDay()];
}