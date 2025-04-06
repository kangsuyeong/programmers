function solution(cap, n, deliveries, pickups) {
    let result=0
    let d=0,p=0 // 남은 배달량
    
    for(let i=n-1;i>=0;i--){
        d +=deliveries[i]
        p +=pickups[i]
        
        // 남은 배달량이 있을 때 방문
        while(d>0 || p>0){
            d-=cap
            p-=cap
            result+=(i+1)*2
        }
    }
    return result
}