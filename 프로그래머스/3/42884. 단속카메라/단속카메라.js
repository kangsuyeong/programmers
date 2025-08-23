function solution(routes) {
    routes.sort((a,b)=>a[1]-b[1])
    
    let result = 0
    let index = -Infinity
    
    for(const [start,end] of routes){
        if(start>index){
            result+=1
            index=end
        }
    }
    return result
}