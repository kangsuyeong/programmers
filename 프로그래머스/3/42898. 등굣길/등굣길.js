function solution(m, n, puddles) {
    
    // dp[행][열]
    const dp = Array.from({length:n+1},()=>Array(m+1).fill(0))
    
    // 물 웅덩이 표시 x=열 y=행
    for(const [x,y] of puddles){
        dp[y][x] = -1
    }
    dp[1][1] = 1
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(i===1 && j===1) continue // 시작점
            if(dp[i][j]===-1) continue
            
            const left = dp[i][j-1]===-1 ? 0:dp[i][j-1]
            const top = dp[i-1][j]===-1 ? 0 :dp[i-1][j]
            dp[i][j] = (left + top)% 1000000007
        }
    }
    return dp[n][m] 
}