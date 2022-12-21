function solution(nums) {
    // 최대한 가져갈 수 있는 포켓몬
    let allowance = nums.length / 2;
    
    // 가져갈 수 있는 포켓몬의 최대 종류 수
    let diff = [...new Set(nums)].length;
    
    return allowance <= diff ? allowance : diff; 
}