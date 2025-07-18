function solution(n, s, a, b, fares) {
    const distance = Array.from({length:n+1},()=>Array(n+1).fill(Infinity))
    let result = Infinity
    
    for(let i=1;i<=n;i++) distance[i][i]=0
    
    for(const fare of fares){
        const [start,end,dist] = fare
        distance[start][end] = dist
        distance[end][start] = dist
    }
    
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                distance[i][j] = Math.min(distance[i][j],distance[i][k] + distance[k][j])
            }
        }
    }
    
    for(let k=1;k<=n;k++){
        result = Math.min(result,distance[s][k] + distance[k][a] + distance[k][b])
    }
    return result 
}