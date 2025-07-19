function solution(n, s, a, b, fares) {
    const distance = Array.from({length:n+1},()=>Array(n+1).fill(Infinity))
    
    for(let i=1;i<=n;i++) distance[i][i] = 0
    
    for(const fare of fares){
        const[start,end,cost] = fare
        distance[start][end] = cost
        distance[end][start] = cost
    }
    
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
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