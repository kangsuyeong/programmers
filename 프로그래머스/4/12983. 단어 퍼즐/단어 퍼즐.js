function solution(strs, t) {
    const n = t.length
    const dp = Array(n+1).fill(Infinity)
    dp[0]=0
    
    for(let i=1;i<=n;i++){
        for(let j=Math.max(1,i-5);j<=i;j++){
            const cur_str = t.slice(j-1,i)
            if(strs.includes(cur_str)){
                dp[i] = Math.min(dp[j-1]+1,dp[i])
            }
        }
    }
    return dp[n]===Infinity ? -1: dp[n]
}