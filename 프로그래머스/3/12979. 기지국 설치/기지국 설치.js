function solution(n, stations, w) {
    let count = 0 // 증성해야할 기지국 개수
    const bandWidth = 2*w + 1 
    let index = 1 // 현재 인덱스
    
    // 오름차순 정 렬
    stations.sort((a,b)=>a-b)
    
    for(const station of stations){
        const left = station - w
        const right = station + w
        
        if(index < left){
            const length = left - index
            count += Math.ceil(length / bandWidth)
        }
        index = right + 1
    }
    
    if(index<=n ){
        const length = n-index + 1
        count += Math.ceil(length/bandWidth)
    }
    
    return count
}