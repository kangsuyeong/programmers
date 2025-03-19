class MinHeap{
    constructor(){
        this.items=[]
    }
    size(){
        return this.items.length
    }
    push(item){
        this.items.push(item)
        this.bubbleUp()
    }
    pop(){
        if(this.size()===0) return null
        if(this.size()===1) return this.items.pop()
        
        const min = this.items[0]
        this.items[0] = this.items.pop()
        this.bubbleDown()
        return min
    }
    swap(a,b){
        [this.items[a],this.items[b]] = [this.items[b],this.items[a]]
    }
    bubbleUp(){
        let index = this.size()-1
        while(index>0){
            const parentIndex = Math.floor((index-1)/2)
            if(this.items[index][0]>=this.items[parentIndex][0]) break;
            
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubbleDown(){
        let index = 0
        while(index*2 + 1<=this.size()-1){
            const leftChild = index*2 + 1
            const rightChild = index*2 + 2
            const smallerChild = rightChild <= this.size()-1 && this.items[rightChild][0] < this.items[leftChild][0] ? rightChild : leftChild
            
            if(this.items[index][0] <= this.items[smallerChild][0]) break
            
            this.swap(index,smallerChild)
            index = smallerChild
        }
    }
}

function solution(land, height) {
    const n = land.length
    const visited = Array.from({length:n},()=>Array(n).fill(false))
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0]
    let result=0
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<n
    }
    
    const queue = new MinHeap()
    queue.push([0,0,0])
//        console.log('처음',queue)
//     for(let i=0;i<10;i++){
//                 const [cost,x,y] = queue.pop()
//          console.log('pop한다음',queue)
//         if(!visited[x][y]){
//             visited[x][y] = true // 방문처리
//             result+= cost
//             for(let i=0;i<4;i++){
//                 const nx = x+ dx[i]
//                 const ny = y+dy[i]
                
//                 if(isRange(nx,ny) && !visited[nx][ny]){
//                     const diff = Math.abs(land[x][y]-land[nx][ny])
//                     const new_cost = diff > height ? diff : 0
//                     queue.push([new_cost,nx,ny])
//                 }
//             }
//         }
//         console.log(queue)
//     }
    
    while(queue.size()>0){
        const [cost,x,y] = queue.pop()
        
        if(!visited[x][y]){
            visited[x][y] = true // 방문처리
            result+= cost
            for(let i=0;i<4;i++){
                const nx = x+ dx[i]
                const ny = y+dy[i]
                
                if(isRange(nx,ny) && !visited[nx][ny]){
                    const diff = Math.abs(land[x][y]-land[nx][ny])
                    const new_cost = diff > height ? diff : 0
                    queue.push([new_cost,nx,ny])
                }
            }
        }
    }
    return result
}