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
    const result = []
    
    const queue = new Queue()
    
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]
    const visited = Array.from({length:n},()=>Array(m).fill(false))
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<m
    }
    

    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(maps[i][j]!=='X' && !visited[i][j]){
                queue.push([i,j])
                visited[i][j]=true // 방문처리
                let sum = Number(maps[i][j])
                while(queue.size()>0){
                    const [x,y] = queue.pop()
                    for(const [dx,dy] of directions){
                        const nx = x + dx
                        const ny = y + dy
                        if(isRange(nx,ny) && !visited[nx][ny] && maps[nx][ny]!=='X'){
                            queue.push([nx,ny])
                            sum+=Number(maps[nx][ny])
                            visited[nx][ny]=true
                        }
                    }
                }
                result.push(sum)
            }
        }
    }
    return result.length>0 ? result.sort((a,b)=>a-b) : [-1]
}