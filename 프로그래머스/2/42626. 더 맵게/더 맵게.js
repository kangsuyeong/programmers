class MinHeap{
    items=[]
    
    push(item){
        this.items.push(item)
        this.bubbleUp()
    }
    size(){
        return this.items.length
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
            const parentIndex  = Math.floor((index-1)/2)
            if(this.items[index] >=this.items[parentIndex]) break;
            
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubbleDown(){
        let index = 0
        while(index*2+1 <=this.size()-1){
            const leftChild = index*2+1
            const rightChild = index*2 + 2
            const smallerChild = rightChild <=this.size()-1 && this.items[rightChild] < this.items[leftChild] ? rightChild : leftChild
            
            if(this.items[index] <=this.items[smallerChild]) break;
            
            this.swap(index,smallerChild)
            index = smallerChild
        }
    }
    check(n){
        return this.items[0] >=n
    }
}

function solution(scoville, K) {
    let count = 0
    const heap = new MinHeap()
    for(const s of scoville){
        heap.push(s)
    }
    
    while(!heap.check(K)){
        if(heap.size()===1) return -1
        const first = heap.pop()
        const second = heap.pop()
        
        const new_s = first + (second*2)
        heap.push(new_s)
        count+=1
    }
    return count
}