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
        return this.rear-this.front
    }
}

function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    const dist = Array.from({length:n },()=>Array(m).fill(-1))
    
    
    const direction = [[-1,0],[1,0],[0,1],[0,-1]]
    
    function isRange(x,y){
        return x>=0 && x<n && y>=0 && y<m
    }
    
    const queue = new Queue()
    queue.push([0,0]) // [x,y]
    dist[0][0]=1
    
    while(queue.size()>0){
        const [x,y] = queue.pop()
        
        for(const [dx,dy] of direction){
            const nx = x + dx
            const ny = y + dy
            if(isRange(nx,ny) && maps[nx][ny]===1 && dist[nx][ny]===-1){
                dist[nx][ny]=dist[x][y]+1
                queue.push([nx,ny])
            }
        }
    }
    
    return dist[n-1][m-1]
}