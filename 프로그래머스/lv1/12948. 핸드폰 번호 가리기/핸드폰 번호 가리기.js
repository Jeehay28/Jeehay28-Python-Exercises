function solution(phone_number) {
    let str = ("*").repeat(phone_number.length - 4);
    str += phone_number.slice(phone_number.length - 4);
    return str;
}