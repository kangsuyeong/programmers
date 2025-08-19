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
    const visited = Array.from({length:n},()=>Array(m).fill(false))
    
    
    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]
    
    function isRange(x,y){
        return x>=0 && x<n && y>=0 && y<m
    }
    
    const queue = new Queue()
    queue.push([0,0,1]) // [x,y,dist]
    visited[0][0] = true
    
    while(queue.size()>0){
        const [x,y,dist] = queue.pop()
        
        if(x===n-1 && y===m-1) return dist
        
        for(let i=0;i<4;i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(isRange(nx,ny) && maps[x][y]===1 && !visited[nx][ny]){
                queue.push([nx,ny,dist+1])
                visited[nx][ny]=true
            }
        }
    }
    
    return -1
}