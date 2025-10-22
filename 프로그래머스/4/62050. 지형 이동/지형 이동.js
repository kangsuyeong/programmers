class MinHeap{
    constructor(){
        this.items=[]
    }
    push(item){
        this.items.push(item)
        this.bubbleUp()
    }
    pop(){
        if(this.size()===0) return null
        if(this.size()===1) return this.items.pop()
        
        const top = this.items[0]
        this.items[0] = this.items.pop()
        this.bubbleDown()
        
        return top
    }
    size(){
        return this.items.length
    }
    swap(a,b){
        [this.items[a],this.items[b]] = [this.items[b],this.items[a]]
    }
    bubbleUp(){
        let index = this.size()-1
        while(index>0){
            const parentIndex = Math.floor((index-1)/2)
            if(this.items[index][0] >= this.items[parentIndex][0]) break;
            
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubbleDown(){
        let index = 0
        while(index*2+1 <= this.size()-1){
            const leftIndex = index*2 + 1
            const rightIndex = index*2 + 2
            const smallerIndex = rightIndex <= this.size()-1 && this.items[rightIndex][0] < this.items[leftIndex][0] ? rightIndex : leftIndex
            
            if(this.items[index][0] <= this.items[smallerIndex][0]) break;
            
            this.swap(index,smallerIndex)
            index = smallerIndex
        }
    }
}

function solution(land, height) {
    const n = land.length
    const direction = [[1,0],[-1,0],[0,1],[0,-1]]
    const visited = Array.from({length:n},()=>Array(n).fill(false))
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<n
    }
    
    const minHeap = new MinHeap()
    minHeap.push([0,0,0])

    let result = 0
    
    while(minHeap.size()>0){
        const [cost,x,y] = minHeap.pop()
        
        if(visited[x][y]) continue
        
        result+=cost
        visited[x][y] = true
        
        for(const [dx,dy] of direction){
            const nx = dx + x
            const ny = dy + y
            if(!isRange(nx,ny) || visited[nx][ny]) continue
            
            const diff = Math.abs(land[x][y]-land[nx][ny])
            const newCost = diff > height ? diff : 0
            minHeap.push([newCost,nx,ny])
        }
    }
    return result
}