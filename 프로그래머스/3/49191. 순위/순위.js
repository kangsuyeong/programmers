function dfs(graph,node,visited){
    for(const neighbor of graph[node] || []){
        if(!visited.has(neighbor)){
            visited.add(neighbor)
            dfs(graph,neighbor,visited)
        }
    }
}

function solution(n, playInfo) {
    let result = 0
    
    const wins = {}
    const loses = {}
    
    for(const [winner,loser] of playInfo){
        wins[winner] = wins[winner] || []
        loses[loser] =  loses[loser] || []
        
        wins[winner].push(loser)
        loses[loser].push(winner)
    }
    
    for(let i=1;i<=n;i++){
        const winCount = new Set()
        const loseCount = new Set()
        
        dfs(wins,i,winCount)
        dfs(loses,i,loseCount)
        
        const total = winCount.size + loseCount.size
        
        if(total===n-1) result+=1
    }
    return result
}