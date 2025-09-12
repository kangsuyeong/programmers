function solution(arrows) {
    const direction = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]
    
    const nodeVisited = new Set()
    const edgeVisited = new Set()
    
    let result = 0
    
    let x = 0
    let y = 0
    nodeVisited.add(`0,0`)
    for(const arrow of arrows){
        
        for(let i=0;i<2;i++){
            const [dx,dy] = direction[arrow]
            const nx = x + dx
            const ny = y + dy
            
            const node = `${nx},${ny}`
            const edge = `${x},${y}-${nx},${ny}`
            const edgeReverse = `${nx},${ny}-${x},${y}`
            if(nodeVisited.has(node) && !edgeVisited.has(edge)){
                result++
            }
            
            nodeVisited.add(node)
            edgeVisited.add(edge)
            edgeVisited.add(edgeReverse)
            x = nx
            y= ny
            
        }
        
    }
    return result
}