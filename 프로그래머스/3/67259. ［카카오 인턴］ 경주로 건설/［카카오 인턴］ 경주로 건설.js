class Queue{
    items=[]
    front=0
    rear=0
    push(data){
        this.items.push(data)
        this.rear++
    }
    pop(){
        return this.items[this.front++]
    }
    isEmpty(){
        return this.front===this.rear 
    }
}

function solution(board) {
    const direction = [[1,0],[-1,0],[0,1],[0,-1]]
    
    const n = board.length
    const queue = new Queue()
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<n
    }
    
    // 가격을 계산하는 3차원 배열
   const costArr = new Array(n).fill().map(()=>new Array(n).fill().map(()=>new Array(4).fill(Infinity)))
   
    // 가격을 0으로 만들어준다.
    for(let i=0;i<4;i++){
        costArr[0][0][i]=0
    }
    queue.push([0,0,-1,0]) // [x,y,이전방향,현재까지 가격]
    
    while(!queue.isEmpty()){
        const [x,y,lastDir,currentCost] = queue.pop()
        // dx dy
        for(let i=0;i<4;i++){
            const [dx,dy] = direction[i]
            const nx = dx + x
            const ny = dy + y
            
            const newCost = currentCost + ((lastDir===-1||lastDir===i) ? 100 : 600)
            // 범위안에 있고, 벽이 없고, 비용 배열보다 newcost가 작을 때 업데이트
            if(isRange(nx,ny) && board[nx][ny]===0 && newCost<costArr[nx][ny][i]){
                costArr[nx][ny][i]=newCost
                queue.push([nx,ny,i,newCost])
            }
            
        }
    }
    // [n-1][n-1] 중 4가지 방향중 가장 작은 값
    return Math.min(...costArr[n-1][n-1])
}