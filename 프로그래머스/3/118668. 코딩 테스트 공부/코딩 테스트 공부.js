function solution(alp, cop, problems) {
    // 모든 문제를 풀기 위해서 최대 알고력과 최대 코딩력을 구해야한다.
    let maxA = 0
    let maxC = 0
    
    for(const [alp_req, cop_req] of problems){
        maxA = Math.max(maxA,alp_req)
        maxC = Math.max(maxC,cop_req)
    }
    
    const dp = Array.from({length:maxA+1},()=>Array(maxC+1).fill(Infinity))
    
    alp = Math.min(alp,maxA)
    cop = Math.min(cop,maxC)
    // 처음 시작
    dp[alp][cop] = 0
    
    for(let a=alp;a<=maxA;a++){
        for(let c=cop;c<=maxC;c++){
            // 공부로 +1
            if(a+1<=maxA) dp[a+1][c] = Math.min(dp[a+1][c],dp[a][c]+1)
            if(c+1<=maxC) dp[a][c+1] = Math.min(dp[a][c+1],dp[a][c]+1)
            
            // 문제 풀기
            for(const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems){
                if(a>=alp_req && c>=cop_req){
                    const next_alp = Math.min(maxA,a+alp_rwd)
                    const next_cop = Math.min(maxC,c+cop_rwd)
                    dp[next_alp][next_cop] = Math.min(dp[next_alp][next_cop],dp[a][c] + cost)
                }
            }
        }
    }
    return dp[maxA][maxC]
}