class Queue{
    items=[]
    rear=0
    front=0
    push(item){
        this.items.push(item)
        this.rear++
    }
    pop(){
        return this.items[this.front++]
    }
    size(){
        return this.rear - this.front
    }
}

function solution(n, edge) {
    const adjList = {}
    
    for(const [n1,n2] of edge){
        adjList[n1] = adjList[n1] || []
        adjList[n2] = adjList[n2] || []
        
        adjList[n1].push(n2)
        adjList[n2].push(n1)
    }
    
    const distance = Array(n+1).fill(-1)
    
    const queue = new Queue()
    queue.push([1,0]) // [node,dist]
    distance[1] = 0
    
    while(queue.size()>0){
        const [node,dist] = queue.pop()
        
        for(const next of adjList[node]){
            if(distance[next]>=0) continue
            
            distance[next] = dist+1
            queue.push([next,dist+1])
        }
    }
    const maxNum = Math.max(...distance)
    const count = distance.filter(d=>d===maxNum).length
    return count
}