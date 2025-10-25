// 1. 선수의 순위를 알기 위해서는 모든 경기의 수를 알아야한다.
// 2. A가 B보다 실력이 좋다면 A는 B를 항상 이긴다.
// 3. 플로이드 워셜(노드와 노드 사이의 최소 거리)을 통해서 선수들 간의 승패 여부 판단 - 100이므로 O(N^3) 가능

function solution(n, results) {
    // graph[win][lose] => 경기의 결과를 안다.
    const graph = Array.from({length:n+1},()=>Array(n+1).fill(false))
    
    for(const [win,lose] of results){
        graph[win][lose] = true
    }
    
    // 플로이드 워셜을 통해서 경기 값 판단
    // 예를 들어 A -> B(A가 B를 이김) 이고 B -> C(B가 C를 이김) 이면
    // A -> C(A가 C를 이김)이 성립
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                // ex) A -> B 결과를 알고, B -> C결과를 알때
                if(graph[i][k] && graph[k][j]){
                    // A -> C 결과 확정
                    graph[i][j] = true
                }
            }
        }
    }
    
    let result = 0
    
    // i는 기준 선수
    for(let i=1;i<=n;i++){
        let count = 0
        // j는 상대 선수
        for(let j=1;j<=n;j++){
            // A가 B를 이기는지 or B가 A를 이기는지
            if(graph[i][j] || graph[j][i]){
                count++
            }
        }
        
        // 본인을 제외한 모든 경기 수를 알때
        if(count===n-1) result++
    }
    return result
}