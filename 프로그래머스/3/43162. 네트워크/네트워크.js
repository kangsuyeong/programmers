function solution(n, computers) {
    let result = 0
    
    const visited = Array(n).fill(false)
    
    function dfs(node){
        visited[node] = true
        for(let i=0;i<n;i++){
            // 연결되어있고, 방문하지 않았을 때 dfs
            if(computers[node][i] && !visited[i]){
                dfs(i)
            }
        }
    }
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i)
            result++
        }
    }
    
    return result
}