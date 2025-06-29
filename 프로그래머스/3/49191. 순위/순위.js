function dfs(graph,node,visited){
    for(const next of graph[node] || []){
        if(!visited.has(next)){
            visited.add(next)
            dfs(graph,next,visited)
        }
    }
}

function solution(n, results) {
    const win = {}
    const lose = {}
    
    for(const [winner,loser] of results){
        win[winner] = win[winner] || []
        lose[loser] = lose[loser] || []
        
        win[winner].push(loser)
        lose[loser].push(winner)
    }
    
    let result = 0
    
    for(let i=1;i<=n;i++){
        const winSet = new Set()
        const loseSet = new Set()
        
        dfs(win,i,winSet)
        dfs(lose,i,loseSet)
        
        const total = winSet.size + loseSet.size
        if(total==n-1) result++
    }
    return result
}