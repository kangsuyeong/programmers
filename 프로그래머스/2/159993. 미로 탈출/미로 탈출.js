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

function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    
    
    let start = null
    let LP = null // 레버의 위치
    let LP_distance = 0
    
    const directions = [
        [1,0],[-1,0],[0,1],[0,-1]
    ]
    
    // 초기 위치 찾기
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(maps[i][j]==='S'){
                start = [i,j]
            }
        }
    }
    
    function isRange(x,y){
        return x>=0 && x<n && y>=0 && y<m
    }
    
    const q1 = new Queue()
    const q1_visited = Array.from({length:n},()=>Array(m).fill(false))

    q1.push([start[0],start[1],0])
    q1_visited[start[0]][start[1]] = true
    while(q1.size()>0){
        const [cx,cy,distance] = q1.pop()
        
        if(maps[cx][cy]==='L'){
            LP = [cx,cy]
            LP_distance = distance
            break;
        }
        
        for(const [dx,dy] of directions){
            const nx = dx + cx
            const ny = dy + cy
            if(isRange(nx,ny) && !q1_visited[nx][ny] && maps[nx][ny]!=='X'){
                q1.push([nx,ny,distance+1])
                q1_visited[nx][ny] = true
            }
        }
        
        
        
    }
    // LP까지 못갈때
    if(!LP) return -1
    
    const q2 = new Queue()
    const q2_visited = Array.from({length:n},()=>Array(m).fill(false))

    let end = null
    let end_distance= 0
    
    q2.push([LP[0],LP[1],0])
    q2_visited[LP[0]][LP[1]] = true
    while(q2.size()>0){
        const [cx,cy,distance] = q2.pop()
        
        if(maps[cx][cy]==='E'){
            end = [cx,cy]
            end_distance = distance
            break;
        }
        
        for(const [dx,dy] of directions){
            const nx = dx + cx
            const ny = dy + cy
            if(isRange(nx,ny) && !q2_visited[nx][ny] && maps[nx][ny]!=='X'){
                q2.push([nx,ny,distance+1])
                q2_visited[nx][ny] = true
            }
        }
        
        
        
    }
    if(!end) return -1
    return LP_distance + end_distance
}