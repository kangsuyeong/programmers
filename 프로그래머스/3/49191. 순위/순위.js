function dfs(graph,node,vistied){
    for(const next of graph[node] || []){
        if(vistied.has(next)) continue
        
        vistied.add(next)
        dfs(graph,next,vistied)
    }
}

function solution(n, results) {
    let result = 0
    
    // 이긴 사람을 계산할 수 있는 인접 리스트
    const winList = {}
    // 진 사람을 계산할 수 있는 인접 리스트
    const loseList = {}
    
    for(const [winner,loser] of results){
        winList[winner] = winList[winner] || []
        loseList[loser] = loseList[loser] || []
        
        winList[winner].push(loser)
        loseList[loser].push(winner)
    }
    
    for(let i=1;i<=n;i++){
        const winSet = new Set()
        const loseSet = new Set()
        
        dfs(winList,i,winSet)
        dfs(loseList,i,loseSet)
        
        const total = winSet.size + loseSet.size
        
        if(total===n-1) result++
    }
    return result
}