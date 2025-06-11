function solution(n, times) {
    let left = 0
    let right = Math.max(...times) * n // 가장 오래걸리는 사람에게 다받는 경우
    let result = right // 최악의 상황고려
    
    while(left<=right){
        const mid = Math.floor((left+right)/2)
        
        // 각 심시관들이 몇명씩 처리할수 있는지
        const total = times.reduce((acc,cur)=>acc+Math.floor(mid/cur),0)
        
        // 심사가능
        if(total>=n){
            result=mid
            right=mid-1
        }
        else{
            left=mid+1
        }
    }
    
    return result
}