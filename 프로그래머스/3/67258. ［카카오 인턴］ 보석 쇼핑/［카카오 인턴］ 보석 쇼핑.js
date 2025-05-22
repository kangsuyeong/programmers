function solution(gems) {
    const gemsKinds = new Set(gems).size
    const gemsMap = new Map()
    let left = 0
    let min_length = gems.length
    let result = [1,gems.length]
    
    
    for(let right=0;right<gems.length;right++){
        
        const gem = gems[right]
        gemsMap.set(gem,(gemsMap.get(gem)||0)+1)
        
        // 모든 종류의 보석을 가지고있을 때
        while(gemsKinds===gemsMap.size){
            
            // 최소길이 index 업데이트
            const current_length = right-left + 1
            if(current_length<min_length){
                min_length = current_length
                result = [left+1,right+1]
            }
            
            // 왼쪽 인덱스 제거하기
            const leftGem = gems[left]
            gemsMap.set(leftGem,gemsMap.get(leftGem)-1)
            
            if(gemsMap.get(leftGem)===0){
                gemsMap.delete(leftGem)
            }
            left++
        }
    }
    return result
}