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
    const visited = Array.from({length:n},()=>Array(m).fill(false))
    
    let start = [0,0] // 시작 지점
    
    const directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    
    function isRange(x,y){
        return 0<=x && x<n && 0<= y && y<m
    }
    
    function findStart(){
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(board[i][j]==='R'){
                    return [i,j]
                }
            }
        }
    }
    
    start = findStart()
    
    const queue = new Queue()
    const [x,y] = start
    queue.push([x,y,0])
    visited[x][y] = true
    
    while(queue.size()>0){
        const [x,y,count] = queue.pop()
        
        for(const [dx,dy] of directions){
            let nx = x
            let ny = y
            while(isRange(nx+dx,ny+dy) && board[nx+dx][ny+dy]!=='D'){
                nx+=dx
                ny+=dy
            }
            if(!visited[nx][ny]){
                
                if(board[nx][ny]==='G'){
                    return count+1
                }
                
                queue.push([nx,ny,count+1])
                visited[nx][ny]=true
            }
        }
        
    }
    
    
    return -1
}