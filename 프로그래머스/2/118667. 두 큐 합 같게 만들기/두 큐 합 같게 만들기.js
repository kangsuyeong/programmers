class Queue{
    items=[]
    rear=0
    front=0
    
    constructor(arr){
        this.items = arr
    }
    
    push(item){
        this.items.push(item)
        this.rear++
    }
    pop(){
        return this.items[this.front++]
    }
}

function solution(queue1, queue2) {
    const n = queue1.length
    let count=0
    let q1_sum = queue1.reduce((acc,cur)=>acc+cur,0)
    let q2_sum = queue2.reduce((acc,cur)=>acc+cur,0)
    const total_sum = q1_sum + q2_sum
    const target = total_sum/2
    if(total_sum%2!==0) return -1
    
    let q1 = new Queue(queue1)
    let q2 = new Queue(queue2)
    
    while(count< (n+n)*2){
        
        if(q1_sum===q2_sum) return count
        
        if(q1_sum>q2_sum){
            const item = q1.pop()
            q1_sum-=item
            q2_sum+=item
            queue2.push(item)
        }
        else{
            const item = q2.pop()
            q2_sum-=item
            q1_sum+=item
            queue1.push(item)
        }
        count++
    }
    return -1
}