function solution(arrows) {
    const direction = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]
    
    const nodeVisited = new Set()
    const edgeVisited = new Set()
    
    let x = 0
    let y = 0
    
    nodeVisited.add('0,0')
    
    let result = 0
    
    
    for(const arrow of arrows){
        const [dx,dy] = direction[arrow]
        for(let i=0;i<2;i++){
            const nx = x + dx
            const ny = y + dy
            
            
            const currentNode = `${x},${y}`
            const nextNode = `${nx},${ny}`
            const edeg = `${currentNode}-${nextNode}`
            const reverseEdge = `${nextNode}-${currentNode}`
            
            if(nodeVisited.has(nextNode) && !edgeVisited.has(edeg)){
                result++   
            }
            nodeVisited.add(nextNode)
            edgeVisited.add(edeg)
            edgeVisited.add(reverseEdge)
            
            x = nx
            y = ny
        }
    }
    return result
}