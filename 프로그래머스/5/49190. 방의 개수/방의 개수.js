function solution(arrows) {
    const direction = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]
    
    const nodeVisited = new Set()
    const edgeVistied = new Set()
    
    // 현재위치
    let x = 0
    let y = 0
    
    nodeVisited.add(`0,0`)
    
    let result = 0
    for(const arrow of arrows){
        const [dx,dy] = direction[arrow]
        for(let i=0;i<2;i++){
            const nx = x + dx
            const ny = y + dy
            
            const currentNode = `${x},${y}`
            const nextNode = `${nx},${ny}`
            
            const edge = `${currentNode}-${nextNode}`
            const edgeRerverse = `${nextNode}-${currentNode}`
            if(nodeVisited.has(nextNode) && !edgeVistied.has(edge)) result++
            
            nodeVisited.add(nextNode)
            edgeVistied.add(edge)
            edgeVistied.add(edgeRerverse)
            
            x= nx
            y=ny
        }
    }
    return result
}