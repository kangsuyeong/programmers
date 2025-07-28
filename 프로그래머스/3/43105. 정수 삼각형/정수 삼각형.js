function solution(triangle) {
    const n = triangle.length
    const dp = Array.from({length:n},()=>Array(n).fill(0))
    
    dp[0][0] = triangle[0][0]
    
    for(let i=1;i<n;i++){
        for(let j=0;j<=i;j++){
            if(j===0){
                dp[i][0] = dp[i-1][0] + triangle[i][0]
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j]
            }
        }
    }
    
    return Math.max(...dp[n-1] )
}