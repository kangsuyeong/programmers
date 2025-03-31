function solution(n, stations, w) {
    let total_count =0 // 증설해야하 할 기지국
    let current_index = 1 // 현재 index
    let bandWidth = 2*w + 1
    
    stations.sort((a,b)=>a-b)
    
    for(const station of stations){
        // 현재 기지국에 대한 왼쪽, 오른쪽 index
        const left = station - w
        const right = station + w
        
        // 현재 index위치가 left보다 작을경우
        if(current_index<left){
            const length = left - current_index // 전파가 도달하지않는 거리
            const count = Math.ceil(length/bandWidth) // 필요한 기지국 수
            total_count +=count
        }
        
        current_index = right+ 1 // 현재 index 업데이트
    }
    
    // 마지막 기지국부터 끝까지
    if(current_index<=n){
        const length = n-current_index + 1
        const count = Math.ceil(length/bandWidth) // 필요한 기지국 수
        total_count +=count
    }
    
    return total_count
}