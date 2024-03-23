function solution(n) {
    const MOD = 1234567;
    const dp = new Array(n + 1).fill(0); // Create an array to store the number of ways to reach each position

    // Base cases
    dp[1] = 1;
    dp[2] = 2;

    // Calculate the number of ways to reach each position
    for (let i = 3; i <= n; i++) {
        // The number of ways to reach the current position is the sum of the number of ways to reach the previous two positions
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }

    return dp[n];
}