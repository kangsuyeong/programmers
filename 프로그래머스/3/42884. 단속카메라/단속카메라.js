function solution(routes) {
    let result = 0 // 카메라 설치 갯수
    let index = -300001 // 현재 카메라 설치 위치
    routes.sort((a,b)=>a[1]-b[1])
    
    for(const [start,end] of routes){
        if(start>index){
            result++
            index=end
        }
    }
    return result
}