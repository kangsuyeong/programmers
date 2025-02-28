function solution(board){
    const n = board.length
    const m = board[0].length
    let dp = Array.from({length:n},()=>Array(m).fill(0))
    let maxLen = 0
    
    for(let i=0;i<n;i++){
        if(board[i][0]===1){
            dp[i][0]=1
            maxLen=1
        }
    }
    
    for(let i=0;i<m;i++){
        if(board[0][i]===1){
            dp[0][i]=1
            maxLen=1
        }
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            if(board[i][j]===1){
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j-1],dp[i-1][j]) +1
                maxLen = Math.max(maxLen,dp[i][j])
            }
        }
    }
    return maxLen * maxLen
}