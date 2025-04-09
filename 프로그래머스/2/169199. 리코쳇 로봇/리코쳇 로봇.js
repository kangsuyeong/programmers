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

function solution(board) {
    const n = board.length
    const m = board[0].length
    const directions = [[0,1],[0,-1],[1,0],[-1,0]]
    let start = null
    
    // 출발점 찾기
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]==='R'){
                start=[i,j]
            }
        }
    }
    
    const queue = new Queue()
    const visited = Array.from({length:n},()=>Array(m).fill(false))
    const [x,y] = start
    queue.push([x,y,0])
    visited[x][y] = true
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<m
    }
    
    while(queue.size()>0){
        const [x,y,count] = queue.pop()
        
        if(board[x][y]==='G') return count
        
        for(const [dx,dy] of directions){
            let nx = x
            let ny = y
            while(isRange(nx+dx,ny+dy) && board[nx+dx][ny+dy]!=='D'){
                nx+=dx
                ny+=dy
            }
            if(!visited[nx][ny]){
                queue.push([nx,ny,count+1])
                visited[nx][ny] = true
            }
        }
        
    }
    return -1
}