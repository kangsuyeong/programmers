function solution(strs, t) {
    const n = t.length
    const dp = Array(n+1).fill(Infinity)
    
    dp[0]=0 // 초기값 초기화
    for(let end=1;end<=n;end++){
        for(let start=Math.max(1,end-5);start<=end;start++){
            const currentString = t.slice(start-1,end)
            if(strs.includes(currentString)){
                dp[end] = Math.min(dp[end],dp[start-1]+1)
            }
        }
    }
    return dp[n]===Infinity ? -1 :dp[n]
}