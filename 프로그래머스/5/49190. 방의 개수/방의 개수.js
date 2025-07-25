function solution(arrows) {
    let result = 0
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [1, 1, 0, -1, -1, -1, 0, 1];
    
    const visitedNodes = new Set()
    const visitedEdges = new Set()
    
    let x = 0
    let y = 0
    
    visitedNodes.add(`0,0`)
    
    for(const dir of arrows){
        for(let i=0;i<2;i++){
            const nx = x + dx[dir]
            const ny = y + dy[dir]
            
            const curNode = `${x},${y}`
            const nextNode = `${nx},${ny}`
            const edge = `${curNode}-${nextNode}`
            const reverseEdge = `${nextNode}-${curNode}`
            
            // 다음 노드가 이미 방문했고, 처음가는 길일 경우 -> 방생성
            if(visitedNodes.has(nextNode) && !visitedEdges.has(edge)){
                result++
            }
            visitedNodes.add(nextNode)
            visitedEdges.add(edge)
            visitedEdges.add(reverseEdge)
            
            x = nx
            y = ny
        }
    }
    return result
}