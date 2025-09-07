function solution(alp, cop, problems) {
    // 모든 문제를 풀기 위해서는 문제를 풀수 있는 최대 알고력과 최대 코딩력을 구해야한다.
    let alp_max = 0
    let cop_max = 0
    
    for(const [alp_req, cop_req] of problems){
        alp_max=Math.max(alp_max,alp_req)
        cop_max=Math.max(cop_max,cop_req)
    }
    
    // 현재 알고력, 코딩력이 문제 풀이의 필요로 하는 알고력, 코딩력보다 높을경우
    // dp 배열의 범위를 맞춰주기 위해서 진행 
    alp = Math.min(alp, alp_max);
    cop = Math.min(cop, cop_max);
    
    // dp[코딩력][알고력] => 코딩력,알고력을 가지는데 걸리는 시간
    const dp = Array.from({length:alp_max+1},()=>Array(cop_max+1).fill(Infinity))
    
    // 초기 값 셋팅하기
    dp[alp][cop] = 0
    
    // dp 값 채우기
    for(let a=alp;a<=alp_max;a++){
        for(let c=cop;c<=cop_max;c++){
            
            // 공부로 +1
            if(a+1<=alp_max){
                dp[a+1][c] = Math.min(dp[a+1][c],dp[a][c]+1) 
            }
            if(c+1<=cop_max){
                dp[a][c+1] = Math.min(dp[a][c+1],dp[a][c]+1)              
            }

            
            // 문제풀이
            for(const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems){
                if(a>=alp_req && c>=cop_req){
                    // Math.min으로 dp 범위 제한하기
                    const alp_next = Math.min(alp_max,a+alp_rwd)
                    const cop_next = Math.min(cop_max,c+cop_rwd)
                    dp[alp_next][cop_next] = Math.min(dp[alp_next][cop_next],dp[a][c]+cost)
                }
                
            }
        }
    }
    return dp[alp_max][cop_max]
}