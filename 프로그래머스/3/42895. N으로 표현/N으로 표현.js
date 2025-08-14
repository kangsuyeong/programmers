function solution(N, number) {
    const dp = Array.from({length:9},()=>new Set())
    
    for(let i=1;i<=8;i++){
        dp[i].add(Number(N.toString().repeat(i)))
        for(let j=1;j<=Math.floor(i/2);j++){
            for(const x of dp[j]){
                for(const y of dp[i-j]){
                    dp[i].add(x+y)
                    
                    dp[i].add(x-y)
                    dp[i].add(y-x)
                    
                    dp[i].add(x*y)
                    
                    if(y!==0) dp[i].add(x/y)
                    if(x!==0) dp[i].add(y/x)
                }
            }
        }
        if(dp[i].has(number)) return i
    }
    return -1
}