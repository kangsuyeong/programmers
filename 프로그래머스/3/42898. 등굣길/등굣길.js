function solution(m, n, puddles) {
    const dp = Array.from({length:n+1},()=>Array(m+1).fill(0))
    
    // 웅덩이 체크
    for(const [y,x] of puddles){
        dp[x][y] = -1
    }
    
    dp[1][1] = 1 // 시작점
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(i===1 && j===1) continue // 집일 경우
            if(dp[i][j]===-1) continue // 웅덩이일 경우
            
            const left = dp[i][j-1] === -1 ? 0 : dp[i][j-1]
            const top = dp[i-1][j] === -1 ? 0 : dp[i-1][j]
            dp[i][j] = (left + top)%1000000007
        }
    }
    return dp[n][m]
}