function solution(strs, t) {
    const n = t.length
    const dp = Array(n+1).fill(Infinity)
    
    dp[0]=0 // 초기값 초기화
    for(let i=1;i<=n;i++){
        for(let j=Math.max(0,i-5);j<i;j++){
            const currentString = t.slice(j,i)
            if(strs.includes(currentString)){
                dp[i] = Math.min(dp[i],dp[j]+1)
            }
        }
    }
    return dp[n]===Infinity?-1:dp[n]
}