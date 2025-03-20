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
            
            if(this.items[index][1] >= this.items[parentIndex][1]) break
            
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    bubbleDown(){
        let index = 0
        while(index*2 + 1 <=this.size()-1){
            const leftChild = index*2 + 1
            const rightChild = index*2 + 2
            const smallerChild = rightChild <= this.size()-1 && this.items[rightChild][1] < this.items[leftChild][1] ? rightChild : leftChild
            
            if(this.items[index][1] <= this.items[smallerChild][1]) break
            
            this.swap(index,smallerChild)
            index = smallerChild
        }
    }
}

function solution(jobs) {
    const n = jobs.length
    let result=0
    jobs.sort((a,b)=>a[0]-b[0])
    const queue = new MinHeap()
    let time = 0
    
    // 큐가 다 비고, jobs를 모두 푸시할때 까지
    while(queue.size()>0 || jobs.length>0){
        // 현재 작업중인게 있고, 현재 시간보다 jobs 실행시간이 작을때 푸시
        while(jobs.length>0 && jobs[0][0] <= time){
            const item = jobs.shift()
            queue.push(item)
        }
        // 현재 작업중인것이 있을때
        if(queue.size()>0){
            const [start,duration] = queue.pop()
            time += duration
            result += time - start
        }
        else{
            time = jobs[0][0]
        }
    }
    return Math.floor(result/n)
}