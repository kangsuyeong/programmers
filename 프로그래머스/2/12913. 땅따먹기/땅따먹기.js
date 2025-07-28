function solution(land) {
    const n = land.length
    const dp = Array.from({length:n},()=>Array(4).fill(0))
    dp[0] = land[0]
    
    for(let i=1;i<n;i++){
        for(let j=0;j<4;j++){
            if(j===0){
                dp[i][0] = Math.max(dp[i-1][1],dp[i-1][2],dp[i-1][3]) + land[i][0]
            }
            else if(j===1){
                dp[i][1] = Math.max(dp[i-1][0],dp[i-1][2],dp[i-1][3]) + land[i][1]
            }
            else if(j===2){
                dp[i][2] = Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][3]) + land[i][2]
            }
            else{
                dp[i][3] = Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][2]) + land[i][3]
            }
        }
    }
    return Math.max(...dp[n-1])
}