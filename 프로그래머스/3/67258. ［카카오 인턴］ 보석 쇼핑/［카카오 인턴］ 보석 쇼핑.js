function solution(gems) {
    const n = gems.length
    const gemsKinds = new Set(gems).size
    const gemsMap = new Map()
    let left = 0
    let right = 0
    let min_length = n
    let result = [1,n]
    
    while(right<n){
        const gemsRight = gems[right]
        gemsMap.set(gemsRight,(gemsMap.get(gemsRight)||0)+1)
        
        while(gemsMap.size===gemsKinds){
            const cur_length = right - left +1
            if(cur_length<min_length){
                min_length = cur_length
                result = [left+1,right+1]
            }
            
            const gemsLeft = gems[left]
            gemsMap.set(gemsLeft,gemsMap.get(gemsLeft)-1)
            
            if(gemsMap.get(gemsLeft)===0){
                gemsMap.delete(gemsLeft)
            }
            left++
        }
        right++
    }
    return result
}