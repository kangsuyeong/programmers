function solution(arrows) {
    const direction = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]
    
    const nodeVisited = new Set()
    const edgeVisited = new Set()
    
    let x = 0
    let y = 0 
    
    nodeVisited.add(`0,0`)
    
    let result = 0
    
   for(const arrow of arrows){
       for(let i=1;i<=2;i++){
           const [dx,dy] = direction[arrow]
           const nx = dx + x
           const ny = dy + y
           
           const currentNode = `${x},${y}`
           const nextNode = `${nx},${ny}`
           const edge = `${currentNode}-${nextNode}`
           const reverEdge = `${nextNode}-${currentNode}`
           
           if(nodeVisited.has(nextNode) && !edgeVisited.has(edge)) result+=1
           
           nodeVisited.add(nextNode)
           edgeVisited.add(edge)
           edgeVisited.add(reverEdge)
           
           x = nx
           y = ny
       }
   }
    return result
}