class MinHeap{
    constructor(){
        this.items=[]
    }
    
    size(){
        return this.items.length
    }
    push(item){
        this.items.push(item)
        this.bubleUp()
    }
    pop(){
        if(this.size()===0) return null
        
        const min = this.items[0]
        this.items[0] = this.items[this.size()-1]
        this.items.pop()
        this.bubleDown()
        return min
    }
    swap(a,b){
        [this.items[a],this.items[b]] = [this.items[b],this.items[a]]
    }
    bubleUp(){
        let index = this.size()-1
        while(index>0){
            const parentIndex = Math.floor((index-1)/2)
            if(this.items[index][0]>=this.items[parentIndex][0]) break
            
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubleDown(){
        let index = 0
        while(index*2 + 1 <= this.size()-1){
            const leftIndex = index*2+1
            const rightIndex = index*2 +2
            const minIndex = rightIndex <= this.size()-1 && this.items[rightIndex][0] < this.items[leftIndex][0] ? rightIndex : leftIndex
            
            if(this.items[index][0] <= this.items[minIndex][0]) break;
            
            this.swap(index,minIndex)
            index = minIndex
        }
    }
}

function solution(land, height) {
    const n = land.length
    let result=0
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0]
    
    const visited = Array.from({length:n},()=>Array(n).fill(false))
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<n
    }

    
    const queue = new MinHeap()
    queue.push([0,0,0])
    while(queue.size()>0){
        const [cost,x,y] = queue.pop()
        
        // 방문하지않은 노드만 확인
        if(!visited[x][y]){
            visited[x][y]=true
            result+=cost
            for(let i=0;i<4;i++){
                const nx = x + dx[i]
                const ny = y + dy[i]
                if(isRange(nx,ny) && !visited[nx][ny]){
                    const diff = Math.abs(land[x][y]-land[nx][ny])
                    const new_cost = diff <=height ? 0 : diff
                    queue.push([new_cost,nx,ny])
                }
            }
        }
        
    }
    return result
}