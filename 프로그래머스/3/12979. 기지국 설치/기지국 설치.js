function solution(n, stations, w) {
    let result = 0
    const bandWidth = 2*w + 1
    let index = 1
    
    stations.sort((a,b)=>a-b)
    
    for(const station of stations){
        const left = station -w
        const right = station + w
        
        if(index<left){
            const length = left - index
            result += Math.ceil(length / bandWidth)
        }
   
        index = right + 1
    
    }
    
    if(index<=n){
        const length = n - index + 1
        result += Math.ceil(length / bandWidth)
    }
    return result
}