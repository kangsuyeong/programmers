function solution(n, wires) {
    let min_diff = Infinity
    const adjMatrix = Array.from({length:n+1},()=>Array(n+1).fill(false))
    for(const [start,end] of wires){
        adjMatrix[start][end] = true
        adjMatrix[end][start] = true
    }
    

    function dfs(node,visited){
        let count=1
        visited.add(node)
        for(let i=1;i<=n;i++){
            if(adjMatrix[node][i] && !visited.has(i)){
                count+=dfs(i,visited)
            }
        }
        return count
    }
    
    for(const [start,end] of wires){
        const visited = new Set()
        // 연결 끊기
        adjMatrix[start][end] = false
        adjMatrix[end][start] = false
        
        const first = dfs(1,visited)
        const second = n-first
        
        const diff = Math.abs(first-second)
        min_diff = Math.min(diff,min_diff)
        
        adjMatrix[start][end] = true
        adjMatrix[end][start] = true
    }
    return  min_diff
}