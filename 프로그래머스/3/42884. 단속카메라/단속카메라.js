function solution(routes) {
    let result = 0
    let index = -30001
    
    routes.sort((a,b)=>a[1]-b[1])
    
    for(const [start,end] of routes){
        if(start>index){
            result++
            index=end
        }
    }
    return result
}