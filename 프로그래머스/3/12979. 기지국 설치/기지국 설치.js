function solution(n, stations, w) {
    let count=0
    const bandWidth = 2*w+1
    let index=1 // 현재 위치
    
    for(const station of stations){
        const left = station - w
        const right = station + w
        
        if(index < left){
            const length = left - index
            count += Math.ceil(length / bandWidth)
        }
        index = right + 1
    }
    
    if(index<=n){
        const length = n-index + 1
        count += Math.ceil(length / bandWidth)
    }
    return count
}