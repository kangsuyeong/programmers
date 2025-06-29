function solution(n, results) {
    // 경기 결과를 계산하는 배열
    const graph = Array.from({length:n+1},()=>Array(n+1).fill(0))
    
    for(const [winner,loser] of results){
        graph[winner][loser] = 1 // 승리
        graph[loser][winner] = -1 // 패배
    }
    
    // 플로이드 알고리즘
    for(let k=1;k<=n;k++){ // 경유지
        for(let i=1;i<=n;i++){ // 본인
            for(let j=1;j<=n;j++){ // 상대방
                if(graph[i][k]===1 && graph[k][j]===1){
                    graph[i][j]=1
                }
                if(graph[i][k]===-1 && graph[k][j]===-1){
                    graph[i][j]=-1
                }
            } 
        }
    }
    
    let result = 0
    for(let i=1;i<=n;i++){
        let known = 0
        for(let j=1;j<=n;j++){
            if(i!==j && graph[i][j]!==0) known++
        }
        if(known===n-1) result++
    }
    return result
}