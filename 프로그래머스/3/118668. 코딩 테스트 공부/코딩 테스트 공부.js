function solution(alp, cop, problems) {
    let max_alp = 0
    let max_cop = 0
    for(const [alp,cop] of problems){
        max_alp = Math.max(max_alp,alp)
        max_cop = Math.max(max_cop,cop)
    }
    
    const dp = Array.from({length:max_alp+2},()=>Array(max_cop+2).fill(Infinity))
    alp = Math.min(alp, max_alp);
    cop = Math.min(cop, max_cop);
    dp[alp][cop] = 0;

    
    for(let i=alp;i<=max_alp;i++){
        for(let j=cop;j<=max_cop;j++){
            dp[i+1][j] = Math.min(dp[i+1][j],dp[i][j]+1)
            dp[i][j+1] = Math.min(dp[i][j+1],dp[i][j]+1)
            
            for(const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems){
                if(i>=alp_req && j>=cop_req){
                    const nextA = Math.min(max_alp,i+alp_rwd)
                    const nextC = Math.min(max_cop,j+cop_rwd)
                    dp[nextA][nextC] = Math.min(dp[nextA][nextC],dp[i][j]+cost)
                }
            }
        }
    }

    return dp[max_alp][max_cop]
}