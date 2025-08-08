function solution(N, number) {
    // dp[i] = i번 활용해서 만들수 있는 숫자 모음
    const dp = Array.from({length:9},()=>new Set())
    
    // i=N을 사용한 횟수
    for(let i=1;i<=8;i++){
        dp[i].add(Number(N.toString().repeat(i)))
        
        
        for(let j=1;j<i;j++){
            for(const x of dp[j]){
                for(const y of dp[i-j]){
                    dp[i].add(x+y)
                    dp[i].add(x-y)
                    dp[i].add(x*y)
                    if(y!==0) dp[i].add(x/y)
                }
            }    
        }
        if(dp[i].has(number)) return i
    }
    return -1
}