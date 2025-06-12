function solution(n, times) {
    let left = 1 // 최소 걸리는 시간
    let right = Math.max(...times)*n // 최대 걸리는 시간
    let result = right

    while(left<=right){
        const mid = Math.floor((left+right)/2) // 가운데 시간
        
        // 심시관 당 시간동안 할수있는 인원 계산 후 합치기
        const total = times.reduce((acc,cur)=>acc+Math.floor(mid/cur),0)
        
        // 현재 심사할수있는 인원이 많은경우
        if(total>=n){
            result = mid
            right = mid-1
        }
        else{
            left = mid+1
        }
    }
    return result
}