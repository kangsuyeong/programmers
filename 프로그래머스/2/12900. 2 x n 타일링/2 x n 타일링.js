function solution(n) {
    const dp=[0,1,2]
    if(n<3) return dp[n]
    for(let i=3;i<=n;i++){
        dp.push((dp[i-1]+dp[i-2])%1000000007)
    }
    return dp[n]
}