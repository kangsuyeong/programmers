function solution(land) {
    const n = land.length
    const dp = Array.from({length:n},()=>Array(4).fill(0))
    
    // dp 첫번째열 셋팅
    for(let i=0;i<4;i++){
        dp[0][i] = land[0][i]
    }
    for(let i=1;i<n;i++){
        for(let j=0;j<4;j++){
            if(j===0){
                dp[i][j] = Math.max(dp[i-1][1],dp[i-1][2],dp[i-1][3]) + land[i][j]
            }
            else if(j===1){
                dp[i][j] = Math.max(dp[i-1][0],dp[i-1][2],dp[i-1][3]) + land[i][j]
            }
            else if(j===2){
                dp[i][j] = Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][3]) + land[i][j]
            }
            else{
                dp[i][j] = Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][2]) + land[i][j]
            }
        }
    }
    return Math.max(...dp[n-1])
}