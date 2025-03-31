function solution(n, computers) {
    let count = 0 // 네트워크 개수
    
    const visited = new Set()
    function dfs(node){
        visited.add(node)
        for(let i=0;i<n;i++){
            if(computers[node][i]===1 &&!visited.has(i)){
                dfs(i)
            }
        }
    }
    
    for(let i=0;i<n;i++){
        if(!visited.has(i)){
            dfs(i)
            count+=1
        }
    }
    return count
}