function solution(n, times) {
    let left = 1
    let right = Math.max(...times) * n
    let result = right
    
    while(left<=right){
        const mid = Math.floor((left+right)/2)
        
        const total = times.reduce((acc,cur)=>acc+Math.floor(mid/cur),0)
        
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