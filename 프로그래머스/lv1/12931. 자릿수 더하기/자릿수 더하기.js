function solution(n)
{
    return n.toString().split("").map(x => parseInt(x)).reduce((total, num) => total + num);
}