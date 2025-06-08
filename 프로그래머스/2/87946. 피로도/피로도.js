function getPermutations(arr,n){
    if(n===1) return arr.map(v=>[v])
    
    const result = []
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        const restPermutations = getPermutations(rest,n-1)
        const combined = restPermutations.map(p=>[fixed,...p])
        result.push(...combined)
    })
    return result
}

function solution(k, dungeons) {
    const allOrders = getPermutations(dungeons,dungeons.length)
    let max_count = 0 // 최대 던전 수
    for(const order of allOrders){
        let count = 0 // 현재 탐험한 던전 수
        let current = k
        
        for(const [need,use] of order){
            if(current>=need){
                current-=use
                count++
            }
        }
        max_count = Math.max(max_count,count)
    }
    return max_count
}