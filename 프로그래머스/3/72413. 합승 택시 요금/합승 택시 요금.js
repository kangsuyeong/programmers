function solution(n, s, a, b, fares) {
    const distacne = Array.from({length:n+1},()=>Array(n+1).fill(Infinity))
    
    for(const [node1,node2,dist] of fares){
        distacne[node1][node2] = dist
        distacne[node2][node1] = dist
    }
    
    // 플루이드 알고리즘으로 각 노드별 최소값 계산하기
    // 경우점
    for(let k=1;k<=n;k++){
        // 시작점
        for(let i=1;i<=n;i++){
            // 끝점
            for(let j=1;j<=n;j++){
                distacne[i][j] = Math.min(distacne[i][j],distacne[i][k] + distacne[k][j])
            }
        }
    }
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(i===j) distacne[i][j] = 0
        }
    }
    
    let result = Infinity
    
    // 합승 구간
    for(let i=1;i<=n;i++){
        result=Math.min(result,distacne[s][i]+distacne[i][a] + distacne[i][b],distacne[s][a]+distacne[s][b])
    }
    return result
}