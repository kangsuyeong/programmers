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
    for(const [start,end] of edge){
        if(!adjList[start]) adjList[start] = []
        if(!adjList[end]) adjList[end] = []
        
        adjList[start].push(end)
        adjList[end].push(start)
    }
    const distance = Array(n+1).fill(-1)
    const queue = new Queue()
    queue.push([1,1])
    distance[1] = 1
    while(queue.size()>0){
        const [cur_dis,item] = queue.pop()
        for(const neighbor of adjList[item]){
            if(distance[neighbor]>0) continue
            
            queue.push([cur_dis+1,neighbor])
            distance[neighbor] = cur_dis+1
        }
    }
   const maxNum = Math.max(...distance)
   const count = distance.filter(d=>d===maxNum)
   return count.length
}