class MinHeap{
    constructor(){
        this.items=[]
    }
    push(item){
        this.items.push(item)
        this.bubbleUp()
    }
    size(){
        return this.items.length
    }
    pop(){
        if(this.size()===0) return null
        if (this.size() === 1) return this.items.pop();
        
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
            if(this.items[index][1]>=this.items[parentIndex][1]) break;
            
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubbleDown(){
        let index = 0
        while(index*2+1<=this.size()-1){
            let leftChild = index*2 +1
            let rightChild = index*2 + 2
            let smallerChild = rightChild <=this.size()-1 && this.items[rightChild][1] < this.items[leftChild][1] ? rightChild : leftChild
            
            if(this.items[index][1] <= this.items[smallerChild][1]) break
            
            this.swap(index,smallerChild)
            index = smallerChild
        }
    }
}

function solution(jobs) {
    const n = jobs.length
    const queue = new MinHeap()
    jobs.sort((a,b)=>a[0]-b[0])
    let result =0
    let time = 0 // 현재시간
    
    while(queue.size()>0 || jobs.length>0){
        while(jobs.length>0 && jobs[0][0]<=time){
            const item = jobs.shift()
            queue.push(item)
        }
        
        if(queue.size()>0){
            const[start,duration] = queue.pop()
            time+=duration
            result+=time-start
        }
        else{
            time = jobs[0][0]
        }
    }
    

    
    return Math.floor(result/n)
}