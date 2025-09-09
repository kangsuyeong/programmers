function solution(alp, cop, problems) {
    let alp_max = 0
    let cop_max = 0
    
    for(const [alp_req, cop_req] of problems){
        alp_max=Math.max(alp_max,alp_req)
        cop_max=Math.max(cop_max,cop_req)
    }
    
    const dp = Array.from({length:alp_max+1},()=>Array(cop_max+1).fill(Infinity))
    
    
    // 만약 현재 알고력이 문제푸는데 필요한 알고력 보다 높은 경우
    alp=Math.min(alp,alp_max)
    cop=Math.min(cop,cop_max)
    
    dp[alp][cop] = 0
    
    for(let a=alp;a<=alp_max;a++){
        for(let c=cop;c<=cop_max;c++){
            if(a+1<=alp_max){
                dp[a+1][c] = Math.min(dp[a+1][c],dp[a][c]+1)
            }
            if(c+1<=cop_max){
                dp[a][c+1] = Math.min(dp[a][c+1],dp[a][c]+1)
            }
            
            // 문제 푸는 경우
            for(const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems){
                if(a>=alp_req && c>=cop_req){
                    const alp_next = Math.min(a+alp_rwd,alp_max)
                    const cop_next = Math.min(c+cop_rwd,cop_max)
                    dp[alp_next][cop_next] = Math.min(dp[alp_next][cop_next],dp[a][c]+cost)
                }

            }
        }
    }
    return dp[alp_max][cop_max]
}