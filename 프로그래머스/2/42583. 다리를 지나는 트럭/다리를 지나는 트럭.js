function solution(bridge_length, weight, truck_weights) {
    let time = 0
    const bridge = Array(bridge_length).fill(0) // 다리
    let current_weigth = 0 // 현재 무게
    
    // 다리에 아무것도 없을때 까지
    while(bridge.length>0){
        const bridge_item = bridge.shift()
        current_weigth-=bridge_item
        
        
        if(truck_weights.length>0){
            // 대기 트럭 첫번째 + 현재 무게 
            if(truck_weights[0] + current_weigth<=weight){
                const truck_item = truck_weights.shift()
                bridge.push(truck_item)
                current_weigth+=truck_item // 현재 무게 업데이트
            }
            else{
                bridge.push(0)
            } 
        }
        

        time++
    }
    return time
}