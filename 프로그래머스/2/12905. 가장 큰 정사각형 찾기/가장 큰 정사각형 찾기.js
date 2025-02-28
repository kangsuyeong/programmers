function solution(board){
    const n= board.length
    const m = board[0].length
    let maxlen = 0
    let dp = Array.from({length:n},()=>Array(m).fill(0))
    
    for(let i=0;i<n;i++){
        if(board[i][0]===1){
            dp[i][0]=1
            maxlen=1
        }
    }
    
    for(let i=0;i<m;i++){
        if(board[0][i]===1){
            dp[0][i]=1
            maxlen=1
        }
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<n;j++){
            if(board[i][j]===1){
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j-1],dp[i-1][j])+1
                maxlen = Math.max(maxlen,dp[i][j])
            }
        }
    }
    return maxlen * maxlen
}