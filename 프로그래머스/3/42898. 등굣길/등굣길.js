function solution(m, n, puddles) {
    
    const dp = Array.from({length:n+1},()=>Array(m+1).fill(0))
    dp[1][1] = 1 // 집
    
    for(const [m,n] of puddles){
        dp[n][m] = -1
    }
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(i===1 && j===1) continue
            if(dp[i][j]===-1) continue
            
            const left = dp[i][j-1] === -1 ? 0 : dp[i][j-1]
            const top = dp[i-1][j] === -1 ? 0: dp[i-1][j]
            dp[i][j] = (left+top) % 1000000007
        }
    }
    return dp[n][m]
}