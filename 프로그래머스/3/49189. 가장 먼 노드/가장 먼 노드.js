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
    // 인접 리스트 만들기
    const adjList = {}
    for(const [n1,n2] of edge){
        adjList[n1] = adjList[n1] || []
        adjList[n2] = adjList[n2] || []
        
        adjList[n1].push(n2)
        adjList[n2].push(n1)
    }
    
    // 거리를 저장하는 배열
    const distance = Array(n+1).fill(-1)
    const q = new Queue()
    q.push([1,0]) // [node,dist]
    distance[1] = 0
    
    while(q.size()>0){
        const [node,dist] = q.pop()
        for(const neighbor of adjList[node]){
            if(distance[neighbor]>=0) continue
            
            q.push([neighbor,dist+1])
            distance[neighbor] = dist+1
        }
    }
    
    const maxNum = Math.max(...distance)
    const count = distance.filter(d=>d===maxNum).length
    return count
}