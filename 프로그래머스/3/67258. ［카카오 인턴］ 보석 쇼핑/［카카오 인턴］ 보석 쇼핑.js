function solution(gems) {
    const gemsKinds = new Set(gems).size
    const gemsMap = new Map()
    let left = 0
    let min_length = gems.length
    let result = [1,gems.length]
    
    for(let right=0;right<gems.length;right++){
        const gemRight = gems[right]
        gemsMap.set(gemRight,(gemsMap.get(gemRight)||0) + 1)
        
        while(gemsKinds===gemsMap.size){
            if(min_length>right - left + 1){
                min_length = right - left + 1
                result = [left+1,right+1]
            }
            
            const gemleft = gems[left]
            gemsMap.set(gemleft,gemsMap.get(gemleft) - 1)
            
            if(gemsMap.get(gemleft)===0){
                gemsMap.delete(gemleft)
            }
            left++
        }
    }
    return result
}