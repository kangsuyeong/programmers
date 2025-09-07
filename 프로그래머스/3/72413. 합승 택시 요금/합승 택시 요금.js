function solution(n, s, a, b, fares) {
    
    // 각 노드별 최소 거리를 저장하는 dp 배열
    const dp = Array.from({length:n+1},()=>Array(n+1).fill(Infinity))
    
    // 자기 자신일 경우 0으로 처리
    for(let i=1;i<=n;i++) dp[i][i] = 0
    
    for(const [node1,node2,cost] of fares){
        dp[node1][node2] = cost
        dp[node2][node1] = cost
    }
    
    // 플루이드 워셜로 각 노드별 최소 거리 구하기
    for(let k=1;k<=n;k++){ // 경유점
        for(let i=1;i<=n;i++){ // 시작점
            for(let j=1;j<=n;j++){ // 끝점
                dp[i][j] = Math.min(dp[i][j],dp[i][k]+dp[k][j])
            }
        }
    }
    
    let result = Infinity
    // 같이 타고 가는 지점을 i
    for(let i=1;i<=n;i++){
        result=Math.min(result,dp[s][i]+dp[i][a]+dp[i][b],dp[s][a]+dp[s][b])
    }
    return result
}