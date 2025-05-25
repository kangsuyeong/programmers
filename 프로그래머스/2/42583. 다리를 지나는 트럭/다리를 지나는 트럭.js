function solution(bridge_length, weight, truck_weights) {
    let time=0
    let cur_weight = 0
    const pass = Array(bridge_length).fill(0)
    
    while(pass.length>0){
        const pass_item = pass.shift()
        cur_weight -=pass_item
        
        if(truck_weights.length>0){
            if(cur_weight+ truck_weights[0]>weight){
                pass.push(0)
            }
            else{
                const item = truck_weights.shift()
                pass.push(item)
                cur_weight +=item
            }
        }
        
        time++
    }
    return time
}