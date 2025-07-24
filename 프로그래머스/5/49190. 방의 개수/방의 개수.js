function solution(arrows) {
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [1, 1, 0, -1, -1, -1, 0, 1];
    
    const visitedNodes = new Set()
    const visitedEdges = new Set()
    
    let x = 0
    let y = 0
    
    visitedNodes.add(`0,0`)
    let roomCount = 0
    
    for(const dir of arrows){
        for(let i=0;i<2;i++){
            const nx = x + dx[dir]
            const ny = y + dy[dir]

            const curr = `${x},${y}`
            const next = `${nx},${ny}`
            const edge = `${curr}-${next}`
            const reverseEdge = `${next}-${curr}`

            if(visitedNodes.has(next) && !visitedEdges.has(edge)){
                roomCount++
            }

            visitedNodes.add(next)
            visitedEdges.add(edge)
            visitedEdges.add(reverseEdge)

            x = nx
            y = ny
        }
    }
    
    return roomCount;
}