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
        
        const min = this.items[0]
        this.items[0] = this.items[this.size()-1]
        this.items.pop()
        this.bubbleDown()
        return min
    }
    swap(a,b){
        [this.items[a],this.items[b]] = [this.items[b],this.items[a]]
    }
    bubbleUp(){
        let index = this.size() -1 
        while(index>0){
            const parentIndex = Math.floor((index-1)/2)
            if(this.items[parentIndex][0] <= this.items[index][0]) break;
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubbleDown(){
        let index =0
        while(index*2+1 <= this.size()-1){
            let leftChild = index*2 +1
            let rightChild = index*2 +2
            let smallerChild = rightChild <= this.size()-1 && this.items[rightChild][0] < this.items[leftChild][0] ? rightChild : leftChild
            
            if(this.items[index][0] <= this.items[smallerChild][0]) break
            this.swap(index,smallerChild)
            index=smallerChild
        }
    }
}

function solution(land, height) {
    const n = land.length
    let result=0
    const queue = new MinHeap()
    const visited = Array.from({length:n},()=>Array(n).fill(false))
    const dx = [0,0,-1,1]
    const dy = [1,-1,0,0]
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<n
    }
    
    queue.push([0,0,0]) // 비용 x, y
    while(queue.size()>0){
        const [cost,x,y] = queue.pop()
        // 만약 이미 방문했다면 넘어감
        if (visited[x][y]) continue;
        
        result+=cost
        visited[x][y] = true
        for(let i=0;i<4;i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(isRange(nx,ny) && !visited[nx][ny]){
                const diff = Math.abs(land[x][y]-land[nx][ny])
                const newCost = diff <= height ? 0 : diff
                queue.push([newCost,nx,ny])
            }
        }
        
    }
    return result
}