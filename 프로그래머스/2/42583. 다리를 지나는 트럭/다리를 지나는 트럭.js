class Queue{
    items=[]
    rear=0
    front=0
    constructor(array){
        this.items=array
        this.rear = array.length
    }
    push(item){
        this.items.push(item)
        this.rear++
    }
    pop(){
        return this.items[this.front++]
    }
    size(){
        return this.rear - this.front
    }
    first(){
        return this.items[this.front]
    }
}

function solution(bridge_length, weight, truck_weights) {
    const bridge = new Queue(Array(bridge_length).fill(0))
    truck_weights = new Queue(truck_weights)
    let current_weight = 0
    let time = 0
    
    while(bridge.size()>0){
        //먼저 다리에 있는거 하나 빼기
        const bridge_item = bridge.pop()
        current_weight-=bridge_item
        
        if(truck_weights.size()>0){
            if(truck_weights.first() + current_weight <=weight){
                const truck_item = truck_weights.pop()
                bridge.push(truck_item)
                current_weight+=truck_item
            }
            else{
                bridge.push(0)
            }
        }
        time++
    }
    return time
}