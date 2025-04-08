function solution(n, computers) {
    let count =0 // 네트워크 갯수
    const visited = new Set() // 방문한 노드
    
    function dfs(node){
        visited.add(node)
        for(let i=0;i<computers.length;i++){
            if(computers[node][i]===1 && !visited.has(i)){
                dfs(i)
            }
        }
    }
    

    
    for(let i=0;i<n;i++){
        if(!visited.has(i)){
            dfs(i) // dfs로 탐색
            count+=1 // 네트워크 1 증가
        }
        console.log(count,visited)
    }
    return count
}