function solution(n, s, a, b, fares) {
    const distance = Array.from({length:n+1},()=>Array(n+1).fill(Infinity))
    
    for (let i = 1; i <= n; i++) distance[i][i] = 0;
    
    for(const fare of fares){
        const [node1,node2,dist] = fare
        distance[node1][node2] = dist
        distance[node2][node1] = dist
    }
    
    for(let k=1;k<=n;k++){ // 경유지
        for(let i=1;i<=n;i++){ // 출발지
            for(let j=1;j<=n;j++){ // 도착지
                distance[i][j] = Math.min(distance[i][k] + distance[k][j],distance[i][j])
            }
        }
    }
    
    let result = Infinity
    for(let k=1;k<=n;k++){
        result = Math.min(result,distance[s][k] + distance[k][a] + distance[k][b])
    }
    return result
}