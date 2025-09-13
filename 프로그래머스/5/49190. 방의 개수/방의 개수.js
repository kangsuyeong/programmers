function solution(arrows) {
    const direction = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]
    
    const nodeVisited = new Set()
    const edgeVisited = new Set()
    
    let x=0
    let y=0
    nodeVisited.add('0,0')
    
    let result = 0
    
    for(const arrow of arrows){
        for(let i=0;i<2;i++){
            const [dx,dy] = direction[arrow]
            const nx = dx + x
            const ny = dy + y
            
            const currentNode = `${x},${y}`
            const nextNode = `${nx},${ny}`
            const edge = `${currentNode}-${nextNode}`
            const reverseEdge = `${nextNode}-${currentNode}`
            
            // 노드가 이미 방문했고, 처음 방문하는 엣지
            if(nodeVisited.has(nextNode) && !edgeVisited.has(edge)) result++
            
            nodeVisited.add(nextNode)
            edgeVisited.add(edge)
            edgeVisited.add(reverseEdge)
            
            x = nx
            y = ny
        }
    }
    return result
}