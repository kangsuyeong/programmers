class MaxHeap{
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
            
            if(this.items[index] <= this.items[parentIndex]) break;
            
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubbleDown(){
        let index = 0
        while(index*2+1<=this.size()-1){
            const leftIndex = index*2 + 1
            const rightIndex = index*2 + 2
            const biggerIndex = rightIndex <= this.size()-1 && this.items[rightIndex] > this.items[leftIndex] ? rightIndex : leftIndex
            
            if(this.items[index] >= this.items[biggerIndex]) break
            
            this.swap(index,biggerIndex)
            index = biggerIndex
        }
    }
}

function solution(n, works) {
    if(works.length===1){
        const item = works[0] - n
        if(item>0) return Math.pow(item,2)
        else return 0
    }
    const maxHeap = new MaxHeap()
    
    for(const work of works){
        maxHeap.push(work)
    }
    
    
    while(n>0){
        const maxWork = maxHeap.pop()
        const maxSecondWork = maxHeap.items[0]
        
        
        // 첫번째랑 두번째 차이
        const diff = maxWork-maxSecondWork
        
        // 감소 시킬 양
        const desc = Math.min(n,diff>0 ? diff : 1)
        
        if(maxWork-desc>0){
            maxHeap.push(maxWork-desc)
        }
        else{
            maxHeap.push(0)
        }
        n-=desc
        
    }
     return maxHeap.items.reduce((acc,cur)=>acc+=Math.pow(cur,2),0)
}