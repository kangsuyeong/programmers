class Queue{
    items=[]
    rear=0
    front=0
    constructor(arr){
        this.items=arr
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
    let q1_sum = queue1.reduce((acc,cur)=>acc+cur,0)
    let q2_sum = queue2.reduce((acc,cur)=>acc+cur,0)
    const q1 = new Queue(queue1)
    const q2 = new Queue(queue2)
    
    const total = q1_sum + q2_sum
    const target = total/2
    let result = 0
    
    if(total%2!==0) return -1
    
    while(result<n*4){
        if(q1_sum===q2_sum) return result
        
        if(q1_sum>q2_sum){
            const item = q1.pop()
            q2.push(item)
            q1_sum -=item
            q2_sum+=item
        }
        else{
            const item = q2.pop()
            q1.push(item)
            q1_sum+=item
            q2_sum-=item
        }
        result+=1
    }
    return -1
}