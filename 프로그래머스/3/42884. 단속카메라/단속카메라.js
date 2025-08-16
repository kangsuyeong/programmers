function solution(routes) {
    let result = 0
    
    let cameraIndex = -30001
    
    routes.sort((a,b)=>a[1]-b[1])
    
    for(const [start,end] of routes){
        if(start>cameraIndex){
            result++
            cameraIndex=end
        }
    }
    
    
    
    return result
}